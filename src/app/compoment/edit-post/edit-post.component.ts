import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {ModelService} from "../../services/model.service";
import {Mode} from "../../model/mode";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  // @ts-ignore
  post: Post;
  models: Mode[] = [
    {}
  ];

  postForm = new FormGroup( {
    content: new FormControl(''),
    time: new FormControl(''),
    title: new FormControl(''),
    modeId: new FormControl('')
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
          this.postForm = new FormGroup( {
            content: new FormControl(result.content),
            time: new FormControl(result.time),
            title: new FormControl(result.title),
            modeId: new FormControl(result.mode?.id)
          })
          this.post = result;
          console.log(result)
        },
        error => {
          console.log(error)
        })
    },)
  }

  updatePostProfile() {
    const post = {
      content: this.postForm.value.content,
      time: this.postForm.value.time,
      title: this.postForm.value.title,
      mode:{
        id: this.postForm.value.modeId
      }
    }
    console.log(post);
    // @ts-ignore
    this.postService.updatePost(this.post.id, post).subscribe(() => {
      alert("Sửa thành công!")
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
