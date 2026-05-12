"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { motion } from "framer-motion";
import {
  MapPinned,
  Globe,
  CalendarDays,
  DollarSign,
  ImageIcon,
  Plane,
} from "lucide-react";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AddDestination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] shadow-2xl p-6 md:p-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-5">
              <div className="bg-cyan-500/20 p-5 rounded-full border border-cyan-400/20">
                <Plane className="text-cyan-400 w-10 h-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Add Destination
            </h1>

            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Create beautiful travel experiences and manage destinations with
              style.
            </p>
          </motion.div>

          {/* Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="md:col-span-2"
              >
                <TextField name="destinationName" isRequired>
                  <Label className="text-slate-200 mb-2">
                    Destination Name
                  </Label>

                  <div className="relative">
                    <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-cyan-400 w-5 h-5" />

                    <Input
                      placeholder="Bali Paradise"
                      className="pl-12 rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 h-14 text-white"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </motion.div>

              {/* Country */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <TextField name="country" isRequired>
                  <Label className="text-slate-200 mb-2">Country</Label>

                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-cyan-400 w-5 h-5" />

                    <Input
                      placeholder="Indonesia"
                      className="pl-12 rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 h-14 text-white"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </motion.div>

              {/* Category */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Label className="text-slate-200 mb-2 block">Category</Label>

                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Select.Trigger className="rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 h-14 text-white transition-all duration-300">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      {[
                        "Beach",
                        "Mountain",
                        "City",
                        "Adventure",
                        "Cultural",
                        "Luxury",
                      ].map((item) => (
                        <ListBox.Item key={item} id={item} textValue={item}>
                          {item}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </motion.div>

              {/* Price */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <TextField name="price" type="number" isRequired>
                  <Label className="text-slate-200 mb-2">Price (USD)</Label>

                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-cyan-400 w-5 h-5" />

                    <Input
                      type="number"
                      placeholder="1299"
                      className="pl-12 rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 h-14 text-white"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </motion.div>

              {/* Duration */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <TextField name="duration" isRequired>
                  <Label className="text-slate-200 mb-2">Duration</Label>

                  <Input
                    placeholder="7 Days / 6 Nights"
                    className="rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 h-14 text-white"
                  />

                  <FieldError />
                </TextField>
              </motion.div>

              {/* Departure Date */}
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="md:col-span-2"
              >
                <TextField name="departureDate" type="date" isRequired>
                  <Label className="text-slate-200 mb-2">Departure Date</Label>

                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-cyan-400 w-5 h-5" />

                    <Input
                      type="date"
                      className="pl-12 rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 h-14 text-white"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </motion.div>

              {/* Image URL */}
              <motion.div
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="md:col-span-2"
              >
                <TextField name="imageUrl" isRequired>
                  <Label className="text-slate-200 mb-2">Image URL</Label>

                  <div className="relative">
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-cyan-400 w-5 h-5" />

                    <Input
                      type="url"
                      placeholder="https://example.com/bali.jpg"
                      className="pl-12 rounded-2xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 h-14 text-white"
                    />
                  </div>

                  <FieldError />
                </TextField>
              </motion.div>

              {/* Description */}
              <motion.div
                custom={7}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="md:col-span-2"
              >
                <TextField name="description" isRequired>
                  <Label className="text-slate-200 mb-2">Description</Label>

                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl bg-white/10 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 transition-all duration-300 min-h-[160px] text-white"
                  />

                  <FieldError />
                </TextField>
              </motion.div>
            </div>

            {/* Button */}
            <motion.div
              custom={8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Button
                type="submit"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                ✈ Add Destination
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddDestination;
