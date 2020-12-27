import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  categories: any = [];
  categoriesFirstFive: any = [];
  categoriesSecondFive: any = [];
  commonSub: Subscription;

  constructor(public common: CommonService, private messageService: MessageService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.commonSub.unsubscribe();
  }

}
