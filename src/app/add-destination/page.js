'use client';
import { Button, FieldError, Input, Label, TextArea, TextField, Select, ListBox } from '@heroui/react';
import React, { useState } from 'react';

const AddDestination = () => {
  const [formData, setFormData] = useState({
    destinationName: '',
    country: '',
    category: '',
    price: '',
    duration: '',
    departureDate: '',
    imageUrl: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      destinationName: '',
      country: '',
      category: '',
      price: '',
      duration: '',
      departureDate: '',
      imageUrl: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-8 md:py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 md:mb-12 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-500 hover:scale-105">
          Add New Destination
        </h1>
        <p className="text-base md:text-xl text-gray-600 transition-all duration-500 hover:text-cyan-600">
          Share amazing travel destinations with the world
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 transition-all duration-500 hover:shadow-3xl animate-fade-in-delay">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2 group">
              <TextField name="destinationName" isRequired value={formData.destinationName} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Destination Name</Label>
                <Input 
                  placeholder="Bali Paradise" 
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <div className="group">
              <TextField name="country" isRequired value={formData.country} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Country</Label>
                <Input 
                  placeholder="Indonesia" 
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Category */}
            <div className="group">
              <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Category</Label>
              <Select
                name="category"
                isRequired
                className="w-full mt-2"
                placeholder="Select category"
                value={formData.category}
                onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <Select.Trigger className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      🏖️ Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      🏔️ Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      🏙️ City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      🎯 Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      🏛️ Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      ✨ Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <div className="group">
              <TextField name="price" type="number" isRequired value={formData.price} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Price (USD)</Label>
                <Input 
                  type="number" 
                  placeholder="1299" 
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Duration */}
            <div className="group">
              <TextField name="duration" isRequired value={formData.duration} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Duration</Label>
                <Input 
                  placeholder="7 Days / 6 Nights" 
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Departure Date */}
            <div className="md:col-span-2 group">
              <TextField name="departureDate" type="date" isRequired value={formData.departureDate} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Departure Date</Label>
                <Input 
                  type="date" 
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL with Preview */}
            <div className="md:col-span-2 group">
              <TextField name="imageUrl" isRequired value={formData.imageUrl} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200"
                />
                <FieldError />
              </TextField>
              
              {/* Image Preview */}
              {formData.imageUrl && (
                <div className="mt-4 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <img 
                    src={formData.imageUrl} 
                    alt="Destination preview" 
                    className="w-full h-32 sm:h-48 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2 group">
              <TextField name="description" isRequired value={formData.description} onChange={handleInputChange}>
                <Label className="text-gray-700 font-semibold group-hover:text-cyan-600 transition-colors">Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md focus:shadow-cyan-200 min-h-[120px]"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Adding Destination...
                </span>
              ) : (
                'Add Destination'
              )}
            </Button>
            
            <Button
              type="button"
              onClick={() => setFormData({
                destinationName: '',
                country: '',
                category: '',
                price: '',
                duration: '',
                departureDate: '',
                imageUrl: '',
                description: ''
              })}
              className="w-full sm:w-auto px-8 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Clear Form
            </Button>
          </div>
        </form>
      </div>

      {/* Success Message */}
      {!isSubmitting && formData.destinationName === '' && (
        <div className="max-w-4xl mx-auto mt-8 text-center animate-fade-in">
          <p className="text-green-600 font-semibold text-lg">
            ✨ Destination added successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default AddDestination;
