import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {ModelService} from "../../services/model.service";
import {Model} from "../../model/model";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post = {
    id: '',
    content: '',
    time: '',
    title: '',
    mode: {
      id: '',
      name: ''
    }
  };
  models: Model[] = [
    {}
  ];
  postForm: FormGroup = this.fb.group({
    content: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    model: {
      name: new FormControl('', Validators.required)
    }
  })

  constructor(private postService: PostService,
              private modelService: ModelService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.modelService.getAll().subscribe(result => {
        this.models = result;
        console.log(result);
      }, error => {
        console.log(error)
      }
    )
    this.activatedRoute.paramMap.subscribe(parammap => {
      const id = parammap.get('id');
      console.log(id);
      this.postService.findById(id).subscribe(result => {
          this.postForm = new FormGroup({
            model: new  FormControl(result.mode?.id)
          })
          this.post = result;
          console.log(result)
        },
        error => {
          console.log(error)
        })
    },)
    this.post = {
      content: '',
      time: '',
      title: '',
      mode: {
        id:''
      },
    }
  }

  updatePostProfile() {
    const post = {
      content: this.postForm.value.content,
      time: this.postForm.value.time,
      title: this.postForm.value.title,
      mode:{
        id: this.postForm.value.
      }
    }
    console.log(post);
    // @ts-ignore
    this.postService.updatePost(this.post.id, post).subscribe(() => {
      alert("thành công")
    })
  }

  finAllMode() {
    this.modelService.getAll().subscribe(result => {
        this.models = result;
        console.log(result);
      }, error => {
        console.log(error)
      }
    )
  }
  delete(){
    // @ts-ignore
    this.postService.deletePost(this.post.id).subscribe(()=>{
      alert("xóa thành công")
    })
  }
}
