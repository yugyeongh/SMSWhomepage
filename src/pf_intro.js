import React from 'react';
import './stylesheets/style.css';
import './HeaderFooter.css'

function PfIntro() {
    const font = {
        fontSize: "8px"
    }
    return (
        <>
            <div className="inner">
                <div align="center" className="main__banner">학과소개</div>
                <ul className="classTab">
                    <li><a align="center" href="/pf_intro">· 교수소개</a></li>
                    <li><a align="center" href="/cs_intro">· 컴퓨터과학전공</a></li>
                    <li><a align="center" href="/sw_intro">· 소프트웨어융합전공</a></li>
                </ul>
                <p align="center" className="major_title_1">소프트웨어학부 구성원</p>
                    <span align="center" className="major_title_2">교수진 소개</span>
                    <span align="center" className="major_title_3">PROFESSORS OF SOFTWARE</span>
            </div>

            <div className="inner">
                <ul className="tiles">
                    <li>
                        <img src={require("../src/img/최종원.jpg").default} alt="" />
                        <h3>최종원 교수</h3>
                        <p>choejn@sm.ac.kr</p>
                        <span style={font} className="majordiv">컴퓨터 네트워크</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 411</td>
                            <td className="td2">02) 710-9445</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/이광수.jpg").default} alt="profile" />
                        <h3>이광수 교수</h3>
                        <p>rhee@sm.ac.kr</p>
                        <span className="majordiv">정보 보호</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 413</td>
                            <td className="td2">02) 710-9429</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/김주균.jpg").default} alt="profile" />
                        <h3>김주균 교수</h3>
                        <p>jgkim@sm.ac.kr</p>
                        <span className="majordiv">운영체제, 컴퓨터구조</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 412</td>
                            <td className="td2">02) 710-9430</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                    <img src={require("../src/img/문봉희.jpg").default} alt="profile" />
                        <h3>문봉희 교수</h3>
                        <p>rhee@sm.ac.kr</p>
                        <span className="majordiv">컴퓨터구조</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 414</td>
                            <td className="td2">02) 710-9427</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/창병모.jpg").default} alt="profile" />
                        <h3>창병모 교수</h3>
                        <p>chang@sm.ac.kr</p>
                        <span className="majordiv">프로그래밍 언어, IoT</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 410</td>
                            <td className="td2">02) 710-9378</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/최영우.jpg").default} alt="profile" />
                        <h3>최영우 교수</h3>
                        <p>ywchoi@sm.ac.kr</p>
                        <span className="majordiv">인공지능, 영상처리</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 409</td>
                            <td className="td2">02) 710-9763</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/심준호.jpg").default} alt="profile" />
                        <h3>심준호 교수</h3>
                        <p>jshim@sm.ac.kr</p>
                        <span className="majordiv">데이터베이스, 빅데이터</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 407</td>
                            <td className="td2">02) 710-9643</td></tr>
                        </tbody></table>
                    </li>
                    <li>
                        <img src={require("../src/img/김윤희.jpg").default} alt="profile" />
                        <h3>김윤희 교수</h3>
                        <p>yulan@sm.ac.kr</p>
                        <span className="majordiv">분산 시스템</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 402</td>
                            <td className="td2">02) 710-9664</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/유석종.jpg").default} alt="profile" />
                        <h3>유석종 교수</h3>
                        <p>sjyu@sm.ac.kr</p>
                        <span className="majordiv">컴퓨터 그래픽스, HCI</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 405</td>
                            <td className="td2">02) 710-9831</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/이기용.jpg").default} alt="profile" />
                        <h3>이기용 교수</h3>
                        <p>kiyonglee@sm.ac.kr</p>
                        <span className="majordiv">DB, 데이터마이닝<br/> 빅데이터</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 406</td>
                            <td className="td2">02) 2077-7583</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/김윤진.jpg").default} alt="profile" />
                        <h3>김윤진 교수</h3>
                        <p>jshim@sm.ac.kr</p>
                        <span className="majordiv"> VLSI/SystemOnChip설계<br/> 임베디드시스템</span>
                        <table><tbody><tr>
                            <td className="td1">새힘관 407</td>
                            <td className="td2">02) 710-9643</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/박영훈.jpg").default} alt="profile" />
                        <h3>박영훈 교수</h3>
                        <p>yh.park@sm.ac.kr</p>
                        <span className="majordiv">정보 보안, 최적화</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 101</td>
                            <td className="td2">02) 2077-7326</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/채희준.jpg").default} alt="profile" />
                        <h3>채희준 교수</h3>
                        <p>heechae@sm.ac.kr</p>
                        <span className="majordiv">데이터사이언스<br/>바이오/헬스, 빅데이터마이닝</span>
                        <table><tbody><tr>
                            <td className="td1">새힘관 104</td>
                            <td className="td2">02) 2077-7414</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/정영주.jpg").default} alt="profile" />
                        <h3>정영주 교수</h3>
                        <p>yjeong@sm.ac.kr</p>
                        <span className="majordiv">3D 디스플레이, VR/AR</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">새힘관 505</td>
                            <td className="td2">02) 2077-7584</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/박동철.jpg").default} alt="profile" />
                        <h3>박동철 교수</h3>
                        <p>dpark@sm.ac.kr</p>
                        <span className="majordiv">빅데이터 처리, <br/>스토리지 시스템 및 응용</span>
                        <table><tbody><tr>
                            <td className="td1">새힘관 408</td>
                            <td className="td2">02) 710-9762</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/박숙영.jpg").default} alt="profile" />
                        <h3>박숙영 교수</h3>
                        <p>blue@sm.ac.kr</p>
                        <span className="majordiv">무선 네트워크 통신</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">Undefined</td>
                            <td className="td2">Undefined</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/이현자.jpg").default} alt="profile" />
                        <h3>이현자 교수</h3>
                        <p>hyunjalee@sm.ac.kr</p>
                        <span className="majordiv">정보 모델링, 시맨틱 웹기술</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">Undefined</td>
                            <td className="td2">Undefined</td></tr></tbody>
                        </table>
                    </li>
                    <li>
                        <img src={require("../src/img/박재년.jpg").default} alt="profile" />
                        <h3>박재년 명예교수</h3>
                        <p>jnpark@sm.ac.kr</p>
                        <span className="majordiv">소프트웨어공학</span>
                        <table className="line"><tbody><tr>
                            <td className="td1">Undefined</td>
                            <td className="td2">Undefined</td></tr></tbody>
                        </table>
                    </li>
                </ul>
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

export default PfIntro;