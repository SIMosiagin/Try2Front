import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Skill} from "../../entity/Skill";
import {SkillGroup} from "../../entity/SkillGroup";
import {MappingService} from "../../service/Mapping.service";

@Component({
  selector: 'app-update-skill-group',
  templateUrl: './update-skill-group.component.html',
  styleUrls: ['./update-skill-group.component.css']
})
export class UpdateSkillGroupComponent implements OnInit {

  closeResult;
  newSkillGroup:SkillGroup = new SkillGroup(null,null,null);
  constructor(private modalService: NgbModal,
              private mappingService: MappingService) { }

  ngOnInit() {
  }


  open(content) {
    //this.skillGroup = content._parentView.parent.component.getSkillGroup;
    this.modalService.open(content).result.then((result) => {
      this.mappingService.addSkillGroup(this.newSkillGroup);
      content._parentView.parent.component.setNewGroup(this.newSkillGroup);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
