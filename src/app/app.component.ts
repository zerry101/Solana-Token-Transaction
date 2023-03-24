import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as web3 from '@solana/web3.js';
import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public fb:FormBuilder){

  }

  ngOnInit(): void {
    this.setupForm();
  }

  title = 'Solana_Token_Transaction_App';

  transactionForm:FormGroup<any>=this.fb.group('');

  setupForm(){
    this.transactionForm=this.fb.group({
       RecipientPublicKey:[""],
       Amount:[""],
       selectedToken:[""]
    })
  }


}
