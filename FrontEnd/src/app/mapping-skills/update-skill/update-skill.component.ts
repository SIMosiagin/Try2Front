import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Skill} from "../../entity/Skill";
import {SkillGroup} from "../../entity/SkillGroup";
import {MappingService} from "../../service/Mapping.service";

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  @Input()
  public skill: Skill;
  public skillGroup:Array<SkillGroup>;
  closeResult;

  constructor(private modalService: NgbModal,
              private mappingService: MappingService) { }

  ngOnInit() {
    this.skillGroup = this.mappingService.getSkillGroup();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
       //content._parentView.parent.component.updateSkill(this.skill);
    },
    (reason) => {
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

  setSG(event){
   for (let i in this.skillGroup){
     if (this.skillGroup[i].id == event.target.value){
       this.skill.skillGroup = this.skillGroup[i] ;
       break
     }
   }
  }

  setNewGroup(newGroup:SkillGroup){
    this.skill.skillGroup = newGroup;
  }
}
