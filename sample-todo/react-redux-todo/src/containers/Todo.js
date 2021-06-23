import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import Todo from '../components/Todo';

const mapStateToProps = state => {
    return {
        todo_comp: state.todo_redu,
    }
}

const URL = 'https://e5gpia9l7e.execute-api.us-west-2.amazonaws.com/default/testLambda/';
const API_KEY = '‚±‚±‚ÉAPI‚ÌƒL[‚ð“ü‚ê‚é';
const HEADER = {
    'x-api-key': API_KEY 
};
const T_NAME ='TodoList';
const mapDispatchToProps = dispath =>
{
    return {
        getTask_comp:() => {
            fetch( `${URL}?TableName=${T_NAME}`,{ 
                mode: 'cors',
                headers: HEADER
            }).then( res => {
                return res.json();
            })
            .then( json => {
                console.log(json.Items);
                dispath( actions.getTask(json.Items) );
            })
            .catch( error =>{
                dispath( actions.getTask(error.name + ':' + error.message ) );
            });
        },

        addTodo_comp: (todo) => {
            var post_json = {
                "TableName":T_NAME,
                "Item":
                {
                    "name": "test",
                    "task": todo
                }
            };
            return fetch( `${URL}`,{ 
                mode: 'cors',
                method:'POST',
                headers: HEADER,
                body:JSON.stringify(post_json)
            })
            .catch( error =>{
                console.log(error);
            });
        },
        dellTodo_comp: (dellIndex) => {
            var dell_json = {
                "TableName":"TodoList",
                "Key":{
                  "TodoID": dellIndex
                }
              }
            return fetch( `${URL}`,{ 
                mode: 'cors',
                method:'DELETE',
                headers: HEADER,
                body:JSON.stringify(dell_json)
            })
            .catch( error =>{
                console.log(error);
            });
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Todo)