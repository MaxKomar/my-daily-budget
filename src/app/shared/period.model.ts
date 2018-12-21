export class Period {
  id: string;
  startDate: Date;
  endDate: Date;
  incomes: {
    description: string;
    amount: number;
  }[];
  obligatoryPayments: {
    description: string;
    amount: number;
  }[];
  accumulationPercentage: number;

  constructor({id, startDate, endDate, incomes, obligatoryPayments, accumulationPercentage}) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.incomes = incomes;
    this.obligatoryPayments = obligatoryPayments;
    this.accumulationPercentage = accumulationPercentage;
  }

  get totalIncome(): number {
    return this.incomes.reduce((val, item) => val + item.amount, 0);
  }

  get totalObligatoryPayments(): number {
    return this.obligatoryPayments.reduce((val, item) => val + item.amount, 0);
  }

  get accumulationAmount(): number {
    return this.totalIncome * (this.accumulationPercentage / 100);
  }
}
