import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'raee-search-list',
  templateUrl: './search-list.component.html',
  styles: [
  ]
})
export class SearchListComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubsription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';


  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.debouncerSubsription = this.debouncer
      .pipe(
        // aqui si el observable deja de emitir valores por 1 segundo pasa al otro
        // debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubsription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
