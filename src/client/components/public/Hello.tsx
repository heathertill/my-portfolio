import * as React from 'react';

export interface HelloProps {}
 
const Hello: React.SFC<HelloProps> = () => {
    return ( 
        <div>Hello World!</div>
     );
}
 
export default Hello;