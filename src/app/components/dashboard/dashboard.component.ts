import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommentList, List, UsersList } from '../../interface/list.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userList: any;
  allUserList: any;
  commentList: any;
  searchTerm: string = '';
  page = 1;
  pageSize = 10;
  collectionSize1: number = 0;
  collectionSize2: number = 0;
  collectionSize3: number = 0;
  itemList!: List[];
  allItemsList!: List[];
  allCommentList: any;
  paginateData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUserData().subscribe((data) => {
      this.collectionSize1 = data.length;
      this.userList = data;
      this.allUserList = this.userList;
    });
    this.dataService.getCommentData().subscribe((data) => {
      this.collectionSize2 = data.length;
      this.commentList = data;
      this.allCommentList = this.commentList;
    });
    this.dataService.getList().subscribe((data) => {
      this.collectionSize3 = data.length;
      this.itemList = data;
      this.allItemsList = this.itemList;
    });
  }

  search(event: Event, value: number): void {
    const target = event.target as HTMLInputElement;
    if (value === 1) {
      this.userList = this.allUserList.filter((val: UsersList) =>
        val.title.toLowerCase().includes(target.value.toLowerCase())
      );
      this.collectionSize1 = this.userList.length;
    } else if (value === 2) {
      this.commentList = this.allCommentList.filter((val: CommentList) =>
        val.title.toLowerCase().includes(target.value.toLowerCase())
      );
      this.collectionSize2 = this.commentList.length;
    } else {
      this.itemList = this.allItemsList.filter((val: List) =>
        val.title.toLowerCase().includes(target.value.toLowerCase())
      );
      this.collectionSize3 = this.itemList.length;
    }
  }

  getData() {
    this.paginateData = this.itemList.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
