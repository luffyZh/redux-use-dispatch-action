/** Declaration file generated by dts-gen */
declare module 'redux-use-dispatch-action' {
  import { ActionCreator } from 'redux';

  interface IMapActions {
    [key: string]: ActionCreator<any>;
  }
  
  export function useDispatchAction(actions: IMapActions);

}
