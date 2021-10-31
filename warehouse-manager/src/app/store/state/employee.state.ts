import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IEmployee } from 'src/app/interfaces/employee';
import { SetEmployee, UnsetEmployee } from '../actions/employee.actions';

export class EmployeeStateModel {
  employee: IEmployee[] = []
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    employee: []
  }
})
export class EmployeeState {

  @Selector()
  static getEmployee(state: EmployeeStateModel) {
    return state.employee[0]
  }

  @Action(SetEmployee)
  setEmployee({ getState, patchState }: StateContext<EmployeeStateModel>, { payload }: SetEmployee) {
    const state = getState();
    patchState({
      employee: [payload]
    });
  }

  @Action(UnsetEmployee)
  unsetEmployee({ patchState }: StateContext<EmployeeStateModel>) {
    patchState({
      employee: []
    });
  }

}