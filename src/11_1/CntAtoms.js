import { atom, selector } from "recoil";

export const CntAtoms =  atom({
    key : 'CntAtoms' ,
    default : 0
});

export const CntAtomsTwice =  selector({
    key : 'CntAtomsTwice' ,
    get : ({get}) => {
        return get(CntAtoms) * 2 ;
    }
});