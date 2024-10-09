import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export default function JobPostingForm() {
  const [formData, setFormData] = useState<{
    jobTitle: string;
    description: string;
    category: string;
    quantity: string;
    deliveryDate: undefined; // Allow deliveryDate to be Date or null
    location: string;
    budgetMin: string;
    budgetMax: string;
    email: string;
    allergyInfo: string;
    specialNotes: string;
  }>({
    jobTitle: '',
    description: '',
    category: '',
    quantity: '',
    deliveryDate: undefined,
    location: '',
    budgetMin: '',
    budgetMax: '',
    email: '',
    allergyInfo: '',
    specialNotes: ''
  });

  const [images, setImages] = useState<File[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleDateChange = (date: any) => {
    setFormData(prev => ({ ...prev, deliveryDate: date}));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleAttachmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.jobTitle) newErrors.jobTitle = 'Job title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.quantity) newErrors.quantity = 'Quantity is required';
    if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
    if (!formData.email) newErrors.email = 'Email is required';
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, images, attachments });
      // Here you would typically send the data to your backend
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 xxxxs:p-6 md:p-8 space-y-6 bg-white shadow-lg rounded-lg md:flex md:gap-x-9 5xl:gap-x-14 md:h-[50rem]">
      <div className='md:w-2/3 lg:w-1/2 md:flex md:flex-col md:justify-between'>
        {/* Job Title */}
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-sm xxxxs:text-base">Job Title</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="Enter job title"
            className={cn("text-sm xxxxs:text-base", errors.jobTitle && "border-red-500")}
          />
          {errors.jobTitle && <p className="text-red-500 text-xs xxxxs:text-sm">{errors.jobTitle}</p>}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm xxxxs:text-base">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your baking job requirements"
            className="h-24 xxxxs:h-32 md:h-40 text-sm xxxxs:text-base max-h-32"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm xxxxs:text-base">Category/Specialty</Label>
          <Select name="category" onValueChange={handleSelectChange}>
            <SelectTrigger className={cn("text-sm xxxxs:text-base", errors.category && "border-red-500")}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding-cakes">Wedding Cakes</SelectItem>
              <SelectItem value="muffins">Muffins</SelectItem>
              <SelectItem value="brownies">Brownies</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && <p className="text-red-500 text-xs xxxxs:text-sm">{errors.category}</p>}
        </div>

        {/* Quantity */}
        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-sm xxxxs:text-base">Quantity (Servings/Units)</Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Enter quantity"
            className={cn("text-sm xxxxs:text-base", errors.quantity && "border-red-500")}
          />
          {errors.quantity && <p className="text-red-500 text-xs xxxxs:text-sm">{errors.quantity}</p>}
        </div>

        {/* Delivery Date */}
        <div className="space-y-2">
          <Label htmlFor="deliveryDate" className="text-sm xxxxs:text-base">Delivery Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal text-sm xxxxs:text-base",
                  !formData.deliveryDate && "text-muted-foreground",
                  errors.deliveryDate && "border-red-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.deliveryDate ? format(formData.deliveryDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.deliveryDate}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.deliveryDate && <p className="text-red-500 text-xs xxxxs:text-sm">{errors.deliveryDate}</p>}
        </div>

        {/* Delivery Location */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm xxxxs:text-base">Delivery Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter delivery address"
            className="text-sm xxxxs:text-base"
          />
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <Label htmlFor="" className="text-sm xxxxs:text-base">Budget Range</Label>
          <div className="flex flex-col xxxxs:flex-row space-y-2 xxxxs:space-y-0 xxxxs:space-x-4">
            <Input
              name="budgetMin"
              type="number"
              value={formData.budgetMin}
              onChange={handleInputChange}
              placeholder="Min"
              className="w-full xxxxs:w-1/2 text-sm xxxxs:text-base"
            />
            <Input
              name="budgetMax"
              type="number"
              value={formData.budgetMax}
              onChange={handleInputChange}
              placeholder="Max"
              className="w-full xxxxs:w-1/2 text-sm xxxxs:text-base"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className='md:flex md:flex-col md:justify-between xl:w-1/2'>
        {/* Contact Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm xxxxs:text-base">Contact Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={cn("text-sm xxxxs:text-base", errors.email && "border-red-500")}
          />
          {errors.email && <p className="text-red-500 text-xs xxxxs:text-sm">{errors.email}</p>}
        </div>

        {/* Reference Images */}
        <div className="space-y-2">
          <Label htmlFor="images" className="text-sm xxxxs:text-base">Reference Images</Label>
          <Input
            id="images"
            name="images"
            type="file"
            onChange={handleImageUpload}
            multiple
            accept="image/*"
            className="text-sm xxxxs:text-base"
          />
        </div>

        {/* Allergy Info */}
        <div className="space-y-2">
          <Label htmlFor="allergyInfo" className="text-sm xxxxs:text-base">Allergy or Dietary Preferences</Label>
          <Input
            id="allergyInfo"
            name="allergyInfo"
            value={formData.allergyInfo}
            onChange={handleInputChange}
            placeholder="Enter any dietary restrictions"
            className="text-sm xxxxs:text-base"
          />
        </div>

        {/* Additional Attachments */}
        <div className="space-y-2">
          <Label htmlFor='attachments' className='text-sm xxxxs:text-base'>Additional Attachments</Label>
          <Input
             id='attachments'
             name='attachments'
             type='file'
             onChange={handleAttachmentUpload}
             multiple
             accept=".pdf,.doc,.docx,image/*" // Specify accepted file types
             className='text-sm xxxxs:text-base'
           />
         </div>

         {/* Special Notes */}
         <div className='space-y-2'>
           <Label htmlFor='specialNotes' className='text-sm xxxxs:text-base'>Special Notes</Label>
           <Textarea
             id='specialNotes'
             name='specialNotes'
             value={formData.specialNotes}
             onChange={handleInputChange}
             placeholder='Any additional information or special requests'
             className='h-24 xxxxs:h-32 md:h-40 text-sm xxxxs:text-base max-h-[120px]'
           />
         </div>

         {/* Submit Button */}
         <button type='submit' 
           className='h-10 rounded-md w-full text-sm xxxxs:text-base bg-[#5bbb7b] text-white cursor-pointer'>
           Submit Job Posting
         </button>
       </div>
     </form>
   );
 }