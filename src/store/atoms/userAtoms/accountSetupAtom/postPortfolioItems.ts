import { atom } from "recoil";
import { INITIAL_PORTFOLIO_ATOM_KEY, PORTFOLIO_ATOM_KEY} from "../../../../lib/Config/constants";
import { initialPortfolio, portfolioMediaState } from "../../../InitialState/credentials";



export const PORTFOLIO_ATOM = atom({
  key: PORTFOLIO_ATOM_KEY,
  default: { ...portfolioMediaState },
});

export const initialPortfolioState = atom({
  key: INITIAL_PORTFOLIO_ATOM_KEY,
  default:{...initialPortfolio},
});



// USER is an atom, which represents a pice of state