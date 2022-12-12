
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }
  authForm!: UntypedFormGroup;
  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],

    });

  }



  onSubmit() {

    const data = {
      username: this.authForm.get(['username'])?.value,
      password: this.authForm.get(['password'])?.value,

    }


    this._AuthService.adminLogin(data)
      .subscribe((res) => {

      },
        (error) => {

        }
      );


  }



}
