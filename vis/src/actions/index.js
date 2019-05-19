import { csv } from 'd3.promise';
import dialogueData from '../data/smallData.csv';
import { LOAD_DIALOGUE_DATA } from './types';

export const loadDialogueData = () => dispatch => {
    return csv(dialogueData)
      .then(data => {
          dispatch({
            type: LOAD_DIALOGUE_DATA,
            payload: data.map(d => ({
              ...d,
              datetimeStr: d.date,
              dateStr: d.date.split('T')[0],
            })),
          })
      })
}