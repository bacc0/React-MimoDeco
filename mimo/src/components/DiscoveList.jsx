import React from 'react';
import Card from '../components/Card';

export class DiscoveList extends React.Component{
    render() {
        const { unit } = this.props;
      
        return (
            <div className="container">

                {unit.map(f => {
                    return(
                        <Card  
                            key={f.id}
                            id={f.id}
                                image={f.image}
                                title= {f.title}
                                description={f.description}
                                extraInfo={f.extraInfo}
                       />
                    );
                })};
            </div>
        );
    }
}

export default DiscoveList;
