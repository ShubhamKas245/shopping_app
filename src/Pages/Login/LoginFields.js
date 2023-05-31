import Input from "../../Input";


export const loginFields=[
    {
        component: Input,
        name: "email",
        id: "email",
        type: "email",
        autoComplete: "email",
        placeholder: "Email",
        value: "",
        validate: (value) => {
          if (!value) {
            return "Required...";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return "Invalid email address";
          }
          return null;
        },
      },
      {
        component: Input,
        name: "password",
        id: "password",
        type: "password",
        autoComplete: "new-password",
        placeholder: "Password",
        value: "",
        validate: (value) => {
          if (!value) {
            return "Required...";
          }
          return null;
        },
      },
]

export const loginInitVal=loginFields.reduce((p,c)=>{
    return {...p, [c.name]:c.value};
},{})