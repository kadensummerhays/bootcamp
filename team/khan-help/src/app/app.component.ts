import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ["app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public message = ""
  public formGroup: FormGroup = null
  public useExtraTime = false
  public extraMinutesDays: number = 0
  public extraMinutes: number = 0
  public daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  public hoursMapping = {}
  public percentageMapping = {
    0: 2.5,
    1: 2,
    2: 1,
    3: 0,
    4: -1,
    5: -2,
  }

  constructor(public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      totalMathHours: new FormControl(0)
    })
    this.daysOfWeek.forEach(day => this.formGroup.addControl(day, new FormControl(this.percentageMapping[0])))
    Object
      .keys(this.percentageMapping)
      .forEach(percent => this.hoursMapping[this.percentageMapping[percent]] = percent)
    debugger
  }

  public getSum(): number {
    return this.daysOfWeek.reduce((acc, percentageAmount) => {
      return acc + this.formGroup.controls[percentageAmount].value
    }, 0)
  }

  public getTotalPercentage(): number {
    return this.daysOfWeek.reduce((acc, percentageAmount) => {
      const percentage = this.formGroup.controls[percentageAmount].value
      if (!percentage) { return acc }
      return acc + (this.percentageMapping[percentage] || 0)
    }, 0)
  }

  public totalMathHours(): number {
    return this.formGroup.get('totalMathHours').value / 60
  }

  public extraTime(): number {
    return this.useExtraTime
      ? (this.extraMinutes * this.extraMinutesDays / 60)
      : 0
  }

  public hoursThisWeek(): number {
    return this.totalMathHours() - this.extraTime()
  }

  public remainingHours(): number {
    if (this.hoursThisWeek() <= 0) {
      return this.getSum()
    }
    return this.getSum() - this.hoursThisWeek()
  }

  public hoursCompleted(): string {
    return this.hoursThisWeek() < 0 ? "0.00" : this.hoursThisWeek().toFixed(2)
  }

  public hoursRemainingInfo(): string {
    const remainingHours = this.remainingHours()
    const percentage = this.getTotalPercentage()
    if (percentage >= 5) {
      return `You received ${percentage}%, so you're done!`
    }
    if (remainingHours <= 0) {
      return `${Math.abs(remainingHours).toFixed(2)} Hours overtime this week. You're done!`
    }

    if (remainingHours > 0) {
      return `${remainingHours.toFixed(2)} Hours left!`
    }
  }
}
