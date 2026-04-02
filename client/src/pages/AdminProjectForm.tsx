import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Link, useLocation, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";

type ProjectFormData = {
  slug: string;
  title: string;
  theatre: string;
  year: string;
  category: string;
  heroImage: string;
  description: string;
  designStatement: string;
  directorName?: string;
  choreographerName?: string;
  musicDirectorName?: string;
  scenicDesignerName: string;
  costumeDesignerName?: string;
  lightingDesignerName?: string;
  soundDesignerName?: string;
  projectionDesignerName?: string;
  stageManagerName?: string;
  photographyName?: string;
  displayOrder?: number;
  published?: number;
};

export default function AdminProjectForm() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const { id } = useParams();
  const isEdit = !!id;
  const projectId = id ? Number(id) : null;

  const { data: project, isLoading: projectLoading } = trpc.projects.getById.useQuery(
    { id: projectId ?? 0 },
    { enabled: isEdit && Number.isFinite(projectId) }
  );

  const createMutation = trpc.admin.projects.create.useMutation({
    onSuccess: () => {
      toast.success("Project created successfully");
      setLocation("/admin");
    },
    onError: (error) => {
      toast.error(`Failed to create project: ${error.message}`);
    },
  });

  const updateMutation = trpc.admin.projects.update.useMutation({
    onSuccess: () => {
      toast.success("Project updated successfully");
      setLocation("/admin");
    },
    onError: (error) => {
      toast.error(`Failed to update project: ${error.message}`);
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    defaultValues: {
      scenicDesignerName: "Gretchen Ugalde",
      published: 1,
      displayOrder: 0,
    },
  });

  const category = watch("category");
  const published = watch("published");

  // Populate form when editing
  useEffect(() => {
    if (project && isEdit) {
      setValue("slug", project.slug);
      setValue("title", project.title);
      setValue("theatre", project.theatre);
      setValue("year", project.year);
      setValue("category", project.category);
      setValue("heroImage", project.heroImage);
      setValue("description", project.description);
      setValue("designStatement", project.designStatement);
      setValue("directorName", project.directorName || "");
      setValue("choreographerName", project.choreographerName || "");
      setValue("musicDirectorName", project.musicDirectorName || "");
      setValue("scenicDesignerName", project.scenicDesignerName);
      setValue("costumeDesignerName", project.costumeDesignerName || "");
      setValue("lightingDesignerName", project.lightingDesignerName || "");
      setValue("soundDesignerName", project.soundDesignerName || "");
      setValue("projectionDesignerName", project.projectionDesignerName || "");
      setValue("stageManagerName", project.stageManagerName || "");
      setValue("photographyName", project.photographyName || "");
      setValue("displayOrder", project.displayOrder);
      setValue("published", project.published);
    }
  }, [project, isEdit, setValue]);

  const onSubmit = (data: ProjectFormData) => {
    if (isEdit && project) {
      updateMutation.mutate({
        id: project.id,
        ...data,
      });
    } else {
      createMutation.mutate(data);
    }
  };

  useEffect(() => {
    if (authLoading || user || typeof window === "undefined") return;
    window.location.href = getLoginUrl();
  }, [authLoading, user]);

  if (authLoading || (isEdit && projectLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!user) return null;

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You don't have permission to access this page.</p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-serif text-foreground">
                  {isEdit ? "Edit Project" : "New Project"}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {isEdit ? "Update project details" : "Add a new project to your portfolio"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-serif">Basic Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title *</Label>
                  <Input
                    id="title"
                    {...register("title", { required: "Title is required" })}
                    placeholder="e.g., Grease"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-600">{errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    {...register("slug", { required: "Slug is required" })}
                    placeholder="e.g., grease"
                    disabled={isEdit}
                  />
                  {errors.slug && (
                    <p className="text-sm text-red-600">{errors.slug.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="theatre">Theatre *</Label>
                  <Input
                    id="theatre"
                    {...register("theatre", { required: "Theatre is required" })}
                    placeholder="e.g., Okoboji Summer Theatre"
                  />
                  {errors.theatre && (
                    <p className="text-sm text-red-600">{errors.theatre.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year *</Label>
                  <Input
                    id="year"
                    {...register("year", { required: "Year is required" })}
                    placeholder="e.g., 2023"
                  />
                  {errors.year && (
                    <p className="text-sm text-red-600">{errors.year.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={category} onValueChange={(value) => setValue("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Musical">Musical</SelectItem>
                      <SelectItem value="Drama">Drama</SelectItem>
                      <SelectItem value="Comedy">Comedy</SelectItem>
                      <SelectItem value="Experimental">Experimental</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="heroImage">Hero Image URL *</Label>
                <Input
                  id="heroImage"
                  {...register("heroImage", { required: "Hero image is required" })}
                  placeholder="https://..."
                />
                {errors.heroImage && (
                  <p className="text-sm text-red-600">{errors.heroImage.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  {...register("description", { required: "Description is required" })}
                  placeholder="Brief description of the production"
                  rows={3}
                />
                {errors.description && (
                  <p className="text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="designStatement">Design Statement *</Label>
                <Textarea
                  id="designStatement"
                  {...register("designStatement", { required: "Design statement is required" })}
                  placeholder="Your design approach and inspiration"
                  rows={4}
                />
                {errors.designStatement && (
                  <p className="text-sm text-red-600">{errors.designStatement.message}</p>
                )}
              </div>
            </div>

            {/* Creative Team */}
            <div className="space-y-6">
              <h2 className="text-xl font-serif">Creative Team</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="directorName">Director</Label>
                  <Input
                    id="directorName"
                    {...register("directorName")}
                    placeholder="Director name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="choreographerName">Choreographer</Label>
                  <Input
                    id="choreographerName"
                    {...register("choreographerName")}
                    placeholder="Choreographer name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="musicDirectorName">Music Director</Label>
                  <Input
                    id="musicDirectorName"
                    {...register("musicDirectorName")}
                    placeholder="Music director name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scenicDesignerName">Scenic Designer *</Label>
                  <Input
                    id="scenicDesignerName"
                    {...register("scenicDesignerName", { required: "Scenic designer is required" })}
                    placeholder="Scenic designer name"
                  />
                  {errors.scenicDesignerName && (
                    <p className="text-sm text-red-600">{errors.scenicDesignerName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="costumeDesignerName">Costume Designer</Label>
                  <Input
                    id="costumeDesignerName"
                    {...register("costumeDesignerName")}
                    placeholder="Costume designer name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lightingDesignerName">Lighting Designer</Label>
                  <Input
                    id="lightingDesignerName"
                    {...register("lightingDesignerName")}
                    placeholder="Lighting designer name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soundDesignerName">Sound Designer</Label>
                  <Input
                    id="soundDesignerName"
                    {...register("soundDesignerName")}
                    placeholder="Sound designer name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectionDesignerName">Projection Designer</Label>
                  <Input
                    id="projectionDesignerName"
                    {...register("projectionDesignerName")}
                    placeholder="Projection designer name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stageManagerName">Stage Manager</Label>
                  <Input
                    id="stageManagerName"
                    {...register("stageManagerName")}
                    placeholder="Stage manager name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photographyName">Photography</Label>
                  <Input
                    id="photographyName"
                    {...register("photographyName")}
                    placeholder="Photographer name"
                  />
                </div>
              </div>
            </div>

            {/* Publishing Options */}
            <div className="space-y-6">
              <h2 className="text-xl font-serif">Publishing Options</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="displayOrder">Display Order</Label>
                  <Input
                    id="displayOrder"
                    type="number"
                    {...register("displayOrder", { valueAsNumber: true })}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="published">Status</Label>
                  <Select 
                    value={published?.toString()} 
                    onValueChange={(value) => setValue("published", parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Published</SelectItem>
                      <SelectItem value="0">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-border">
              <Link href="/admin">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button 
                type="submit" 
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {(createMutation.isPending || updateMutation.isPending) ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {isEdit ? "Update Project" : "Create Project"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
