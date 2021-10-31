import { IEmployee } from "src/app/interfaces/employee";

export class SetEmployee {

  static readonly type = '[EMPLOYEE] Set';

  constructor(public payload: IEmployee) {}

}

export class UnsetEmployee {

  static readonly type = '[EMPLOYEE] Unset';

  constructor(public payload: IEmployee) {}
  
}