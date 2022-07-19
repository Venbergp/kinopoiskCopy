import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {FilmInfoType} from "../../finfo/finfo.module";

export class FilmForm extends FormGroup{
  constructor() {
    super({
      id: new FormControl(''),
      name: new FormControl(''),
      rating: new FormControl(''),
      year: new FormControl(''),
      description: new FormControl(''),
      awardsCheckbox: new FormControl(),
      awards: new FormArray([new FormControl('')]),
    });
  }

  public get id() : FormControl {
    return this.get('id') as FormControl
  }

  public get idValue() : string {
    return this.id.value as string
  }

  public setFormFromFilmInfoType(value : FilmInfoType) {
    this.controls["id"] = new FormControl(value.id)
    this.controls["name"] = new FormControl(value.name)
    this.controls["rating"] = new FormControl(value.rating)
    this.controls["year"] = new FormControl(value.year)
    this.controls["description"] = new FormControl(value.description)
    this.controls["awardsCheckbox"] = new FormControl(false)
    this.controls["awards"] = new FormArray([])

    if (value.awards) {
      for (let i: number = 1; i <= value.awards.length; ++i) {
        let awardName = value.awards[i - 1];
        (this.controls['awards'] as FormArray).push(
          new FormControl({ value: awardName, disabled: true })
        );
      }
    }

  }



}
