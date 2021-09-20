import React, { Component } from 'react';
import MyModal from "./cmodal";
import ModalPortal from './ModalPortal';
import './curriculum.css';

let modal=[];
for (var i=0;i<45;i++){
    modal.push(false);
}
class Curriculum extends Component {
    
    state = {
      modal:modal
    };
    //concat, slice, map, filter
    handleOpenModal = (index) => {
        let temp1=modal.slice(0,index)
        temp1=temp1.concat(true)
        let temp2=modal.slice(index+1)
        let temp3=temp1.concat(temp2)
        this.setState({
          modal:temp3
        });
    };
    handleCloseModal = (index) => {
        let temp1=modal.slice(0,index)
        temp1=temp1.concat(false)
        let temp2=modal.slice(index+1)
        let temp3=temp1.concat(temp2)
        this.setState({
          modal: temp3
        });
    };
    render(){
        return(
            <>
            <div className="sub_intro_page">
                <div className="title-text">과목 소개</div>

                <div className="cs-subject">
                    <div>
                        <div className="box box-right box-back1 box-text2" id="cs1" onClick={()=>this.handleOpenModal(0)}>윈도우<br/>프로그래밍</div>
                        {this.state.modal[0]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(0)} name={0} />
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-right box-back2 box-text2" id="cs2" onClick={()=>this.handleOpenModal(1)}>디지털<br/>논리회로</div> 
                        {this.state.modal[1]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(1)} name={1}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="cs3" onClick={()=>this.handleOpenModal(2)}>리눅스<br/>시스템</div>
                        {this.state.modal[2]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(2)} name={2} />
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-right box-back2 box-text2" id="cs4" onClick={()=>this.handleOpenModal(3)}>프로그래밍<br/>언어론</div>
                        {this.state.modal[3]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(3)} name={3}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="cs5" onClick={()=>this.handleOpenModal(4)}>컴퓨터<br/>구조</div>
                        {this.state.modal[4]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(4)} name={4}/>
                            </ModalPortal>
                        )}   
                    </div> 
                    <div>         
                        <div className="box box-right box-back1 box-text2" id="cs6" onClick={()=>this.handleOpenModal(5)}>웹시스템<br/>설계</div>
                        {this.state.modal[5]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(5)} name={5}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>             
                        <div className="box box-left box-back1 box-text2" id="cs7" onClick={()=>this.handleOpenModal(6)}>시스템<br/>프로그래밍</div> 
                        {this.state.modal[6]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(6)} name={6}/>
                            </ModalPortal>
                        )}
                    </div>  
                    <div>
                        <div className="box box-right box-back1 box-text2" id="cs8" onClick={()=>this.handleOpenModal(7)}>컴퓨터<br/>네트워크1</div>
                        {this.state.modal[7]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(7)}name={7}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="cs9" onClick={()=>this.handleOpenModal(8)}>소프트웨어<br/>공학</div> 
                        {this.state.modal[8]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(8)}name={8}/>
                            </ModalPortal>
                        )}    
                    </div>
                    <div>
                        <div className="box box-right box-back1 box-text1" id="cs10" onClick={()=>this.handleOpenModal(9)}>컴파일러</div>
                        {this.state.modal[9]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(9)}name={9}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="cs11" onClick={()=>this.handleOpenModal(10)}>데이터베이스<br/>프로그래밍</div>
                        {this.state.modal[10] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(10)} name={10}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-right box-back1 box-text2" id="cs12" onClick={()=>this.handleOpenModal(11)}>컴퓨터<br/>네트워크2</div>
                        {this.state.modal[11] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(11)} name={11}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="cs13" onClick={()=>this.handleOpenModal(12)}>임베디드<br/>시스템</div>
                        {this.state.modal[12] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(12)} name={12}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text1" id="cs14" onClick={()=>this.handleOpenModal(13)}>컴퓨터특강</div> 
                        {this.state.modal[13] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(13)} name={13}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-right box-back1 box-text2" id="cs15" onClick={()=>this.handleOpenModal(14)}>영상 정보<br/>처리</div>
                        {this.state.modal[14]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(14)} name={14}/>
                            </ModalPortal>
                        )}
                    </div>
                </div>
        
                <div className="common-subject">
                    <div>
                        <div className="box box-center box-back3 box-text2" id="c1" onClick={()=>this.handleOpenModal(15)}>컴퓨터과학의<br/> 이해</div>
                        {this.state.modal[15] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(15)} name={15}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text2" id="c2" onClick={()=>this.handleOpenModal(16)}>프로그래밍<br/>개론</div>
                        {this.state.modal[16] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(16)} name={16}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text2" id="c3" onClick={()=>this.handleOpenModal(17)}>소프트웨어의<br/>이해</div>
                        {this.state.modal[17] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(17)} name={17}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text1" id="c4" onClick={()=>this.handleOpenModal(18)}>컴퓨터 수학</div>    
                        {this.state.modal[18] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(18)} name={18}/>
                            </ModalPortal>
                        )}     
                    </div>
                    <div>          
                        <div className="box box-center box-back2 box-text1" id="c5" onClick={()=>this.handleOpenModal(19)}>자료구조</div>
                        {this.state.modal[19] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(19)} name={19}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back2 box-text2" id="c6" onClick={()=>this.handleOpenModal(20)}>데이터<br/>사이언스 개론</div>
                        {this.state.modal[20] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(20)} name={20}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text2" id="c7" onClick={()=>this.handleOpenModal(21)}>자바<br/>프로그래밍</div>
                        {this.state.modal[21] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(21)} name={21}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text2" id="c8" onClick={()=>this.handleOpenModal(22)}>컴퓨터<br/>그래픽스</div> 
                        {this.state.modal[22] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(22)} name={22}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>            
                        <div className="box box-center box-back2 box-text1" id="c9" onClick={()=>this.handleOpenModal(23)}>운영체제</div>
                        {this.state.modal[23] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(23)} name={23}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back2 box-text1" id="c10" onClick={()=>this.handleOpenModal(24)}>알고리즘</div>  
                        {this.state.modal[24] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(24)} name={24}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>   
                        <div className="box box-center box-back1 box-text2" id="c11" onClick={()=>this.handleOpenModal(25)}>데이터<br/>베이스와 설계</div>  
                        {this.state.modal[25] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(25)} name={25}/>
                            </ModalPortal>
                        )}   
                    </div>
                    <div>           
                        <div className="box box-center box-back1 box-text2" id="c12" onClick={()=>this.handleOpenModal(26)}>모바일<br/>소프트웨어</div>   
                        {this.state.modal[26] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(26)} name={26}/>
                            </ModalPortal>
                        )}    
                    </div>
                    <div>        
                        <div className="box box-center box-back1 box-text1" id="c13" onClick={()=>this.handleOpenModal(27)}>인공지능</div>         
                        {this.state.modal[27] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(27)} name={27}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>         
                        <div className="box box-center box-back1 box-text2" id="c14" onClick={()=>this.handleOpenModal(28)}>네트워크<br/>보안</div>  
                        {this.state.modal[28] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(28)} name={28}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>        
                        <div className="box box-center box-back1 box-text2" id="c15" onClick={()=>this.handleOpenModal(29)}>클라우드<br/>시스템</div>
                        {this.state.modal[29] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(29)} name={29}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>
                        <div className="box box-center box-back1 box-text2" id="c16" onClick={()=>this.handleOpenModal(30)}>시스템 종합<br/>설계</div> 
                        {this.state.modal[30] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(30)} name={30}/>
                            </ModalPortal>
                        )}  
                    </div>      
                </div>

                <div className="sw-subject">
                    <div>
                        <div className="box box-left box-back1 box-text2" id="sw1" onClick={()=>this.handleOpenModal(31)}>소프트웨어<br/>진로 탐색</div> 
                        {this.state.modal[31] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(31)} name={31}/>
                            </ModalPortal>
                        )}   
                    </div>
                    <div>                 
                        <div className="box box-left box-back3 box-text1" id="sw2" onClick={()=>this.handleOpenModal(32)}>통계학 입문</div>           
                        {this.state.modal[32]&& (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(32)} name={32}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>       
                        <div className="box box-left box-back1 box-text2" id="sw3" onClick={()=>this.handleOpenModal(33)}>경영 정보<br/>시스템</div>
                        {this.state.modal[33] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(33)} name={33}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-right box-back1 box-text2" id="sw4" onClick={()=>this.handleOpenModal(34)}>인터넷 기술<br/>융합</div>   
                        {this.state.modal[34] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(34)} name={34}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div>             
                        <div className="box box-left box-back2 box-text2" id="sw5" onClick={()=>this.handleOpenModal(35)}>컴퓨터 시스템<br/>기초</div>
                        {this.state.modal[35] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(35)} name={35}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="sw6" onClick={()=>this.handleOpenModal(36)}>데이터 마이닝<br/>분석</div> 
                        {this.state.modal[36] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(36)} name={36}/>
                            </ModalPortal>
                        )}
                    </div>
                    <div> 
                        <div className="box box-right box-back1 box-text2" id="sw7" onClick={()=>this.handleOpenModal(37)}>소프트웨어<br/>분석 및 설계</div>
                        {this.state.modal[37] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(37)} name={37}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="sw8" onClick={()=>this.handleOpenModal(38)}>사용자<br/>인터페이스</div>
                        {this.state.modal[38] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(38)} name={38}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text1" id="sw9" onClick={()=>this.handleOpenModal(39)}>스토리지</div>   
                        {this.state.modal[39] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(39)} name={39}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text1" id="sw10" onClick={()=>this.handleOpenModal(40)}>빅데이터</div>  
                        {this.state.modal[40] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(40)} name={40}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-right box-back1 box-text2" id="sw11" onClick={()=>this.handleOpenModal(41)}>인터렉티브<br/>미디어</div>  
                        {this.state.modal[41] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(41)} name={41}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>            
                        <div className="box box-left box-back1 box-text2" id="sw12" onClick={()=>this.handleOpenModal(42)}>바이오<br/>인포메틱스 개론</div>   
                        {this.state.modal[42] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(42)} name={42}/>
                            </ModalPortal>
                        )}  
                    </div>
                    <div>   
                        <div className="box box-right box-back1 box-text1" id="sw13" onClick={()=>this.handleOpenModal(43)}>소융특강</div>              
                        {this.state.modal[43] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(43)}name={43}/>
                            </ModalPortal>
                        )} 
                    </div>
                    <div>
                        <div className="box box-left box-back1 box-text2" id="sw14" onClick={()=>this.handleOpenModal(44)}>사물인터넷<br/>시스템</div>   
                        {this.state.modal[44] && (
                            <ModalPortal>
                                <MyModal onClose={()=>this.handleCloseModal(44)} name={44}/>
                            </ModalPortal>
                        )}  
                    </div>          
                </div>

                <div className="lines l_1"></div>  
                <div className="lineDown ld1"></div>
                <div className="lines l_2"></div>  
                <div className="lineDown ld2"></div>
                <div className="lines l_3"></div>  
                <div className="lineDown ld3"></div>
                <div className="lines l_4"></div> 
                <div className="lineDown ld4"></div> 
                <div className="lines l_5"></div>  
                <div className="lineDown ld5"></div>
                <div className="lines l_6"></div>  
                <div className="lineDown ld6"></div>
                <div className="lines l_7"></div> 
                <div className="lineDown ld7"></div> 
                <div className="lines l_8"></div> 
                <div className="lineDown ld8"></div> 
                
                <div className="lines line1" id="l1">
                    <div className="line-circle01 c01"></div>
                    <div className="sw-line01"></div>
                </div>
                <div className="lines line1" id="l2">
                    <div className="line-circle01 c02"></div>
                    <div className="sw-line01"></div>
                </div>
                <div className="lines line2" id="l3">
                    <div className="line-circle02 c03"></div>
                    <div className="line-circle03 c03"></div>
                    <div className="sw-line02"></div>
                    <div className="cs-line02"></div>
                </div>
                <div className="lines line2" id="l4">
                    <div className="line-circle02 c04"></div>
                    <div className="line-circle03 c04"></div>
                    <div className="sw-line02"></div>
                    <div className="cs-line02"></div>
                </div>
                <div className="lines line2" id="l5">
                    <div className="line-circle02 c05"></div>
                    <div className="line-circle03 c05"></div>
                    <div className="sw-line02"></div>
                    <div className="cs-line02"></div>
                </div>
                <div className="lines line2" id="l6">
                    <div className="line-circle02 c06"></div>
                    <div className="line-circle03 c06"></div>
                    <div className="sw-line02"></div>
                    <div className="cs-line02"></div>
                </div>
                <div className="lines line2" id="l7">
                    <div className="line-circle02 c07"></div>
                    <div className="line-circle03 c07"></div>
                    <div className="sw-line02"></div>
                    <div className="cs-line02"></div>
                </div>
                <div className="lines line2" id="l8">
                    <div className="line-circle02 c08"></div>
                    <div className="line-circle03 c08"></div>
                    <div className="sw-line02"></div>
                    <div className="cs-line02"></div>
                </div> 
            
            </div> 

            <footer className="footer inner">
            <ul className="footer_center">
                <li>ⓒ Comsongz Corp.</li>
                <li>Creator | Comsongz</li>
                <li>Developers | Comsongz</li>
                <li>DEPARTMENT | Apps of SMWU</li>
            </ul>
            </footer>
            </>
        );
    }
}

export default Curriculum;