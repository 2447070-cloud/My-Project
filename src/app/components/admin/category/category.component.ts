import { Component, OnInit } from '@angular/core';
import { CategoryServiceService, ICategory } from '../../../services/category-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  newCategory:ICategory={
    categoryname:'',
    imageURL:''
  }
isEdit:boolean=false;
  categories:ICategory[]=[];

  imgPreview:string|null =null;

  success='';
  error='';

  constructor(private catService:CategoryServiceService){}
  ngOnInit(): void {
    this.loadCategories();
  }

  onImageSelected(event:any){
    const file = event.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload=()=>{
      this.newCategory.imageURL = reader.result as string;
      this.imgPreview= reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  saveCategory(){
   this.catService.save(this.newCategory).subscribe({
    next:()=>{
      this.success="Category saved..!!";
      this.loadCategories();
    },
    error:(err)=>{
      this.error = err.error||err.message;
      console.error(err);      
    }
   })
  }

  loadCategories(){
     this.catService.getAllCategories().subscribe({
      next:(res)=>{
        console.log("Categories from api",res);
        this.categories = res;
      },
      error:(err)=>{
        console.error("error while fetching categories",err);
      }
     });
  }

  editCategory(category:ICategory){
    this.isEdit=true;
    this.newCategory = {...category};
    this.imgPreview = category.imageURL;
  }

  resetForm() {
    this.isEdit = false;
    this.newCategory = { categoryname: '', imageURL: '' };
    this.imgPreview = null;
  }

  deleteCategory(id:number){
    if(!confirm("Are you sure to delete?")) return;
    this.catService.delete(id).subscribe({
      next:(res:any)=>{
        this.success=res.message;
        this.loadCategories();
      },
      error:(err)=>{
        this.error=err.error||err.message||"Failed to delete";
        console.error(err);
      }
    })
  }

  updateCategory(){
    if(!this.newCategory.categoryid) return;

    this.catService.update(this.newCategory.categoryid,this.newCategory).subscribe({
      next:(res)=>{
        this.success="Category updated..!!";
        this.loadCategories();
        this.resetForm();
      },
      error:(err)=>{
        this.error=err.error||err.message||"Failed to update";
        console.error(err);
      }
    })
  }

}
