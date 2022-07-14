import React, { createContext } from "react";
import { IExpenses } from "../types/Types";

const Context = createContext<any | null>(null);

export default Context;
