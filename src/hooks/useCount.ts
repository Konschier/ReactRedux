import { useSelector, useDispatch } from "react-redux";
import { RootStateProps } from "../store";

import { actions } from '../store/ducks/count';

export default function useCount() {
  const { count } = useSelector(({ count }: RootStateProps) => count);
  const dispatch = useDispatch();

  return {
    count,
    plus: () => dispatch(actions.plus()),
    minus: () => dispatch(actions.minus()),
    reset: () => dispatch(actions.reset()),
  };
}