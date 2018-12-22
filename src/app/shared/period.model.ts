export interface IPeriod {
  id: string;
  startDate: Date;
  endDate: Date;
  incomes: {
    description?: string;
    amount: number;
  }[];
  obligatoryPayments?: {
    description?: string;
    amount: number;
  }[];
  accumulationPercentage?: number;
}

export class Period implements IPeriod {
  id;
  startDate;
  endDate;
  incomes;
  obligatoryPayments;
  accumulationPercentage;

  constructor(data) {
    this.id = data.id;
    this.startDate = data.startDate.toDate();
    this.endDate = data.endDate.toDate();
    this.incomes = data.incomes;
    this.obligatoryPayments = data.obligatoryPayments;
    this.accumulationPercentage = data.accumulationPercentage;
  }

  get totalIncome(): number {
    return this.incomes.reduce((val, item) => val + item.amount, 0);
  }

  get totalObligatoryPayments(): number {
    if (this.obligatoryPayments) {
      return this.obligatoryPayments.reduce((val, item) => val + item.amount, 0);
    }
  }

  get accumulationAmount(): number {
    if (this.accumulationPercentage) {
      return this.totalIncome * (this.accumulationPercentage / 100);
    }
  }

  toJSON(): IPeriod {
    const jsonedObject: IPeriod = {} as IPeriod;
    for (const x in this) {

      if (x === 'toJSON' || x === 'constructor' || !this[x]) {
        continue;
      }
      // @ts-ignore
      jsonedObject[x] = this[x] instanceof Date ? this[x].getTime() : this[x];

    }
    return jsonedObject;
  }
}
