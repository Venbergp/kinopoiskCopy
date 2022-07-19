import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {FilmInfoType} from "../../finfo/finfo.module";

export class FilmForm extends FormGroup{
  constructor() {
    super({
      id : new FormControl(''),
      name: new FormControl(''),
      rating: new FormControl(''),
      year: new FormControl(''),
      description: new FormControl(''),
      awardsCheckbox: new FormControl(),
      awards: new FormArray([]),
    });
  }

  public get awardsCheckbox() {
    return this.controls["awardsCheckbox"].getRawValue()
  }

  public enableAwards() {
    this.controls['awards'].enable();
  }

  public disableAwards() {
    this.controls['awards'].disable();
  }

  public setFormFromFilmInfoType(value : FilmInfoType) {

    this.controls["id"].setValue(value.id)
    this.controls["name"].setValue(value.name)
    this.controls["rating"].setValue(value.rating)
    this.controls["year"].setValue(value.year)
    this.controls["description"].setValue(value.description)
    this.controls["awardsCheckbox"].setValue(false);

    if (value.awards) {
      for (let i: number = 1; i <= value.awards.length; ++i) {
        let awardName = value.awards[i - 1];
        (this.controls['awards'] as FormArray).push(
          new FormControl({ value: awardName, disabled: true })
        );
      }
    }
  }

  public addNewAward() {
    (this.controls['awards'] as FormArray).push(
      new FormControl({
        value: '',
        disabled: !this.controls['awardsCheckbox'].getRawValue(),
      })
    );
  }

  public removeAwards(idx: number) {
    //console.log('удаляю награду номер' + idx);
    (this.controls['awards'] as FormArray).removeAt(idx);
  }


  public getAwardList() {
     return(this.controls['awards'] as FormArray).controls as FormControl[]
  }

}
