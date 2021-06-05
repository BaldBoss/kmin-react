import React from "react";

export default class News extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="News-Container row">
                <div className="News-Content col-9">
                    <div className=" box-container row">
                        <div className="News col-6">
                            <div className="News-box">
                                <h1>Cong ty moi sat nhap</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Sed vitae magna quis urna sollicitudin efficitur in eu nisl. 
                                     Sed vel est sit amet sem lobortis euismod.</p>

                            </div>

                        </div>
                        <div className="News col-6">
                        <div className="News-box">
                                <h1>Tuyen nhan su moi</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Sed vitae magna quis urna sollicitudin efficitur in eu nisl. 
                                     Sed vel est sit amet sem lobortis euismod.</p>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="Ads-Container col-3">
                    Quang Cao
                </div>
            </div>
        )
    }
};
