// import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Bell, Building2, ChevronDown, CirclePlus, HelpCircle, Settings, Upload } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { projects } from "@/lib/mock-data";
import { ProjectContext } from "../Context/projectContext";
import { useContext } from 'react';

export const NewProject = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      type: '',
      description: '',
      location: '',
      estimatedBudget: '',
      completionDate: '',
      clientName: '',
      clientEmail: '',
      contractorName: '',
      projectManager: '',
    },
  });

  function onSubmit(values: any) {
    toast.success('Project created successfully!', {
      description: 'Your new project has been created and is ready to go.',
    });
    console.log(values);
  }

  const { projectData, setProjectData } = useContext(ProjectContext);
  const navigate = useNavigate();
  const selectedProject = projectData;

  return (
    <div className="w-screen">
        <header className="h-14 border-b flex items-center px-4 bg-background">
        <div className="flex items-center gap-2 mr-4">
          <Building2 className="h-6 w-6 ml-2" />
          <span className="font-semibold text-lg">OptiBuild</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              {selectedProject.name}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {projects.map((project) => (
              <DropdownMenuItem
                key={project.id}
                onClick={() => setProjectData(project)}
              >
                {project.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" className="flex gap-2 ml-2" onClick={() => navigate("/create")} >
          <CirclePlus/>
          New Project
          </Button>

        <div className="ml-auto flex items-center gap-4">
          <div className="w-96">
            <Input type="search" placeholder="Search..." className="w-full" />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5"/>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </header>
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create New Project</h1>
            <p className="text-muted-foreground mt-2">
              Fill in the details below to create a new construction project.
            </p>
          </div>

          <div className="border rounded-lg p-6 space-y-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Project Basic Information */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Basic Information</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter project name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="industrial">Industrial</SelectItem>
                              <SelectItem value="infrastructure">Infrastructure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter project description"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Location and Timeline */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Location & Timeline</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter project location" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="completionDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Completion Date</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter completion date (e.g., 2023-12-31)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Budget</h2>
                  <FormField
                    control={form.control}
                    name="estimatedBudget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Budget (USD)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter estimated budget"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the total estimated budget for the project
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Stakeholders */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Stakeholders</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="clientName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter client name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter client email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contractorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contractor Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter contractor name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectManager"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Manager</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter project manager name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Blueprint Upload */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Project Documents</h2>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center space-y-4">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                    <div>
                      <Button variant="secondary" className="mt-2">
                        Upload Blueprint
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">
                        Upload project blueprints and documents (PDF, CAD files)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline" type="button" onClick={() => navigate('/')}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={() => {
                    onSubmit(0);
                    navigate('/');
                  }}>Create Project</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};