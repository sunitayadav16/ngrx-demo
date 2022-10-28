import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  allLanguages: string[] = ['en', 'nl', 'ge'];
  switchLang : string ='';
  submitted : boolean = false;
  loginForm !: FormGroup;
 

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'nl', 'ge']);
    translate.use('en');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  
  }
 

  onLogin() {
    if(this.loginForm.valid) {
      // need to implement using ngrx store
      this.submitted = true;
    }else {
      this.submitted = false;
      const controls = this.loginForm.controls
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    
  }

  selectedLanguage(chosenLang: string) {
    this.translate.use(chosenLang);
    this.switchLang = chosenLang;
  }


   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

}
