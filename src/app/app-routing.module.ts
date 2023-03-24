import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as web3 from '@solana/web3.js';
import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
// import { TokenListProvider } from '@solana/spl-token-registry';
// import { Token } from '@solana/spl-token';


// import { Connection, PublicKey, Transaction } from '@solana/web3.js';
// import { TOKEN_PROGRAM_ID, Token } from '@solana/spl-token';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
