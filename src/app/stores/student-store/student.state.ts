export interface studentArr {
    id?:number,
    name?:string
}

export interface IgetStudents {
  students: studentArr[];
}

export const initialState: IgetStudents = {
  students: [
    {
      id: 101,
      name: 'raju',
    },
    {
      id: 102,
      name: 'tejas v',
    },
    {
      id: 103,
      name: "yaa it's me",
    },
  ],
};
