import { Component, OnInit } from '@angular/core';
import { CategoryServiceService, ICategory } from '../../../services/category-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  newCategory: ICategory = {
    categoryname: '',
    imageURL: ''
  };

  isEdit: boolean = false;
  categories: ICategory[] = [];

  imgPreview: string | null = null;

  success = '';
  error = '';

  constructor(private catService: CategoryServiceService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // 🔥 Image upload
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.newCategory.imageURL = reader.result as string;
      this.imgPreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // 🔥 Error handler (IMPORTANT)
  getErrorMessage(err: any): string {
    if (err.error instanceof ProgressEvent) {
      return "Server not responding (backend start kara)";
    } else if (typeof err.error === 'string') {
      return err.error;
    } else if (err.error?.message) {
      return err.error.message;
    } else {
      return "Something went wrong";
    }
  }

  // 🔥 Save
  saveCategory() {
    this.catService.save(this.newCategory).subscribe({
      next: () => {
        this.success = "Category saved!";
        this.error = '';
        this.loadCategories();
        this.resetForm();
      },
      error: (err) => {
        this.error = this.getErrorMessage(err);
      }
    });
  }

  // 🔥 Load
  loadCategories() {
    this.catService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        this.error = this.getErrorMessage(err);
      }
    });
  }

  // 🔥 Edit
  editCategory(category: ICategory) {
    this.isEdit = true;
    this.newCategory = { ...category };
    this.imgPreview = category.imageURL;
  }

  // 🔥 Reset
  resetForm() {
    this.isEdit = false;
    this.newCategory = { categoryname: '', imageURL: '' };
    this.imgPreview = null;
    this.error = '';
    this.success = '';
  }

  // 🔥 Delete
  deleteCategory(id: number) {
    if (!confirm("Are you sure to delete?")) return;

    this.catService.delete(id).subscribe({
      next: (res: any) => {
        this.success = res.message || "Deleted successfully";
        this.loadCategories();
      },
      error: (err) => {
        this.error = this.getErrorMessage(err);
      }
    });
  }

  // 🔥 Update
  updateCategory() {
    if (!this.newCategory.categoryid) return;

    this.catService.update(this.newCategory.categoryid, this.newCategory).subscribe({
      next: () => {
        this.success = "Category updated!";
        this.loadCategories();
        this.resetForm();
      },
      error: (err) => {
        this.error = this.getErrorMessage(err);
      }
    });
  }
}