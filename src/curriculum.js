import React from 'react';
import './curriculum.css';

const Curriculum = () => {
    return(
        <>
        <div className="sub_intro_page">
            <div className="title-text">과목 소개</div>

            <div className="modal_chang" id="mcs1"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>C++ 의 개념적인 부분도 다루면서 <br/>코드 작성법을 배울 수 있는 과목으로 <br/>windows 환경에서 <br/>visual programming을 한다. <br/>또한 MFC Programming도 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs2"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 시스템을 구성하는 <br/>가장 기본적인 회로와 <br/>이러한 회로의 구성 원리에 대해 <br/>학습한 후 기본 동작 회로의 설계를 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs3"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>리눅스 운영체제에서의 <br/>터미널 명령어 등 기본적인 개념을 배우며 <br/>파일 및 프로세스를 중심으로 <br/>파일의 기본 개념 및 사용법, 파일 구조, <br/>파일 입출력, 프로세스 등도 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs4"><div className="modal">
            <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
            <div className="contents">
                <br/>프로그래밍 언어의 종류와 <br/>구문법과 설계 방법을 배운다. <br/>이를 통해 프로그래밍 언어에 대한 <br/>체계적인 이해 및 응용 능력 향상을 <br/>목표로 한다.
            </div>
            </div></div>
            <div className="modal_chang" id="mcs5"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>디지털 논리 회로가 선수강 과목이며 <br/>실제로 컴퓨터가 어떻게 구성되어 있고, <br/>어떻게 설계하는지를 심층적으로 학습한다. <br/>이를 위해 정보의 표현, 각 단위 장치들의<br/> 논리 회로, 제어장치 및 입출력 장치, <br/>기억장치들의 구성을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs6"><div className="modal">
            <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
            <div className="contents">
                <br/>소프트웨어의 이해, <br/>프로그래밍 개론이 선수강과목.<br/>HTML과 CSS, js, jsp, mysql을 <br/>한 번에 배울 수 있는 과목으로 <br/>프로젝트도 진행한다.
            </div>
            </div></div>
            <div className="modal_chang" id="mcs7"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>리눅스를 통해 소프트웨어의 <br/>기본 체계를 이해하고, 시스템 소프트웨어 <br/>활용 능력을 키울 수 있으며 <br/>리눅스 시스템 수업의 심화버전이다. <br/>최종적으로 쉘인터프리터를 만드는 수업이며 <br/>리눅스 시스템을 중심으로 파일 및 입출력, <br/>프로세스, 예외처리, 프로세스 간의 통신 <br/>등을 이용한 문제 해결에 대해 학습한다. 
                </div>
            </div></div>
            <div className="modal_chang" id="mcs8"><div className="modal">
            <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
            <div className="contents">
                <br/>컴퓨터 네트워크에 대한 <br/>핵심 개념과 다양한 네트워크 기술을 배우고,<br/> 최상위 응용 계층부터 물리계층까지 <br/>컴퓨터 네트워크를 구성하는 각 계층<br/>(OSI 7계층)에 대해 학습한다.
            </div>
            </div></div>
            <div className="modal_chang" id="mcs9"><div className="modal">
            <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
            <div className="contents">
                <br/>대형 자료 처리 소프트웨어 <br/>시스템 개발과 유지 관리에 따른 <br/>복잡한 공정 상의 문제를 <br/>해결하기 위한 여러 방법을 <br/>공학적인 측면에서 연구한다. <br/> 팀플이 있다. 
            </div>
            </div></div>
            <div className="modal_chang" id="mcs10"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴파일러 모델들을 비교하고, <br/>컴파일러를 이루는 scanner, <br/>parser, type checker, <br/>source translator, <br/>code generator를 이해하고,<br/> 간단한 컴파일러를 만들어 본다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs11"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>실제 산업계에서 필요한 <br/>데이터 베이스 프로그래밍 기술을 <br/>습득할 수 있는 과목으로 <br/>데이터 베이스 이론과 프로그래밍 <br/>기술을 이용한 데이터 베이스 활용 기법을 <br/>습득한 후 실전 프로젝트를 통해서 <br/>활용 기법을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs12"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 네트워크1이 선수강 과목.<br/> OSI 7계층의 하위 계층인 <br/>네트워크 계층과 데이터 링크 계층, <br/>물리 계층에 대해 학습하고, <br/>네트워크와 멀티미디어 통신에 대해 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs13"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>하드웨어 디자인, CPU 구조와 <br/>하드웨어와 소프트웨어의 <br/>임베디드 시스템을 학습한다. <br/>verilog HDL를 배워 <br/>임베디드 하드웨어과 소프트웨어를 <br/>디자인하며 FPGA 실습이 있다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs14"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>전산학의 최신 주제의 <br/>연구 분야 중 교과목에서 <br/>다루지 않는 주제들을 배운다. <br/>현대 컴퓨터 시스템의 <br/>메모리와 SoC를 기본으로 한 <br/>CPU를 배우고, 메모리 구조, <br/>캐시 메모리, CPU의 구조를 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mcs15"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>디저털 영상처리 이론을 습득하고,<br/> c프로그래밍을 이용한 영상처리 <br/>알고리즘을 구현하는 능력을 키운다. <br/>Visual C++과 OpenCV로 <br/>디지털 영상처리를 학습한다.
                </div>
            </div></div>

           
            <div className="modal_chang" id="mc1"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> 컴퓨터 과학을 처음 접하는 학생이 대상이다. <br/> 컴퓨터에 대한 일반적인 기본 개념을 배우며 <br/> 컴퓨터의 HW/SW등 기본개념, <br/> 새로운 기술 동향등을 배운다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc2"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> C프로그래밍 언어를 배우며, <br/> visual studio의 사용법과 <br/> 프로그램의 실행등을 학습한다. 
                </div>
            </div></div>
            <div className="modal_chang" id="mc3"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> 본격적인 프로그래밍 교과목 수강 전 <br/> 소프트웨어의 개념을 이해하고 <br/> 프로그래밍 기초 개념과 원리를 <br/> 쉽게 학습하는 내용으로 python을 배운다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc4"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> 컴퓨터 과학의 기본 개념들의 기초가 되는 <br/> 수학적 개념들인 집합론, 그래프, 트리, 순열,<br/> 행렬, 재귀관계, 부울대수 등을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc5"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> 자료의 표현, 처리, 탐색, 정렬에 대한<br/>개념과 알고리즘을 배우는 과목으로<br/>선형구조, 탐색, 정렬, 비선형구조 등을 <br/> C언어로 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc6"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> 데이터사이언스란 무엇인지, <br/> 데이터 분석에 필요한 기초 개념, 지식등을<br/>배우며 데이터 사이언스 핵심기술인 <br/> 데이터 모델링, 데이터 마이닝, 머신러닝 등에<br/>대한 기초 개념을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc7"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/> 실습강의이며 응용 소프트웨어 개발에 <br/>적합한 언어 및 개발 환경의 습득과 <br/>소프트웨어 개발 훈련이 목표이며 <br/>객체지향 프로그래밍 언어인 Java를 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc8"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 그래픽스의 기본원리와 <br/>2차원, 3차원, 기하물체의 표현, 변환, <br/>레지스터변환, 조명효과등을 배우며 <br/>openGL 라이브러리학습과 제작도구인 <br/>unity3D를 사용한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc9"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>운영체제 분야와 관련된 여러 이론을 <br/>소개하며 운영체제 설계시 고려할 문제와 <br/>그에 대한 해결책 이해를 목표로 한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc10"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>여러가지 필수 알고리즘들의 기본 개념을 <br/>배우고 JAVA나 C++을 이용해 <br/>응용 프로그램들을 설계하면서 <br/>시간복잡도를 계산하는 방법을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc11"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>데이터베이스와 데이터베이스 <br/>시스템에 대한 기초적 이론을 배우고 <br/>데이터베이스 설계의 요구사항분석과 <br/>논리적 설계, 대표적 모델링 기법인 <br/>ER 모델링과 대표적 질의어인 SQL를 <br/>배우며 시스템 기본 개념과 <br/>정규화 모델링 이론을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc12"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>모바일 컴퓨팅에 대한 <br/>기본 개념과 원리를 배우며 <br/>안드로이드 프로그래밍 실습을 통해 <br/>프로그램을 기획, 설계, 개발하는 <br/> 지식을 습득한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc13"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>인공지능의 기본 개념을 <br/>이해하고 경험을 토대로 문제해결법과 <br/>기계학습 데이터마이닝(WEKA) <br/>신경회로망(ANN,CNN.RNN)등의 <br/>데이터기반 기법등을 학습한다. 
                </div>
            </div></div>
            <div className="modal_chang" id="mc14"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 네트워크에서 사용되고 있는 <br/>보안기술과 암호화 인증기법과 <br/>프로토콜 메세지 인증, <br/> 키분배와 사용자 인증, <br/>악성소프트웨어등에 관해 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc15"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>클라우드 시스템 기술과 <br/>컴퓨팅 패러다임에 대해 학습하며 <br/>이를 바탕으로한 분산 시스템 설계 <br/>및 관리기법에 대한 내용과 <br/>최신기술 동향을 학습한다. <br/>미니프로젝트도 존재한다.
                </div>
            </div></div>
            <div className="modal_chang" id="mc16"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>학과에서 습득한 기초설계, <br/>심화설계 능력을 기반으로 <br/>종합설계 능력을 향상시키기 위한 방법으로 <br/>중대형 규모의 소프트웨어 설계 능력의 <br/>향상을 목표 3-4명의 팀작업 수행한다.
                </div>
            </div></div>
            

            <div className="modal_chang" id="msw1"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>교과목과 전공에 대한 소개, <br/>소프트웨어 분야에 대한 진로 탐색이 <br/> 학기 초반부에 이루어지며, <br/>여러 분야에 종사하는 실무자, <br/>동문 선배, 학과 교수진들을 초청해 <br/>총 여섯번의 강연을 진행한다. <br/>선배를 방문하거나, 전시회를 방문해보는 <br/>등의 일정도 진행한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw2"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>빅데이터 혹은 데이터 사이언스에 <br/>관심이 있는 학생들이 데이터 통계에 <br/>대해 가볍게 접해볼 수 있다. <br/> 통계학의 기초지식부터, 확률이론, <br/>통계적추론방법을 두루 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw3"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>경영정보 시스템의 개요, 컴퓨터와 <br/>데이터 관리 및 데이터베이스를 배운다. <br/>이후 본격적으로 정보시스템을 구축하고 <br/>도입하는 방법과 e-비즈니스에 대해 배우며, <br/> 경영의사결정문제를 해결하기 위한 정보기술과 <br/>경영정보 시스템의 전략적 활용 <br/>및 관리 방안을 종합적으로 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw4"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>4차 산업혁명 시대 도래에 따른 <br/> 융합 기술을 기반으로 하는 <br/>초연결 사회를 이해하기 위해 학습한다. <br/> 다양한 컴퓨팅 기술들을 <br/>실습과 함께 학습하며, <br/>운영체제와, 인공지능 분야는 <br/> 전문가들을 초청해 수업을 진행한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw5"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 시스템의 구조를 이해하기 <br/>위해 회로 설계의 입문을 학습한다.<br/> 이를 사용한 컴퓨터 기본 동작 회로를 <br/>설계할 수 있는 능력을 키운다. <br/>나아가 프로그램이 컴퓨터 상에서 <br/>어떻게 실행되는지를 구조적인 관점에서 <br/>이해할 수 있도록 한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw6"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>데이터로부터 숨겨진 패턴이나 <br/>지식을 탐색하는 기술인 데이터 마이닝의 <br/>여러 이론 및 알고리즘들을 공부한다.<br/> 파이썬 또는 자바를 사용해서 <br/>데이터마이닝 알고리즘을 구현하는 <br/> 실습 과제가 있다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw7"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>소프트웨어 개발과정을 이해하기<br/> 위해서 요구분석과 문서화, <br/>구조적 분석 방법론에 대해 배우고, <br/>자료흐름도, 자료사전과 <br/>소단위 명세서를 직접 작성해본다. <br/>이후 구조적 설계방법과 UML 모델링, <br/>객체지향 설계에 대해 배운다. <br/>팀프로젝트가 있다.  
                </div>
            </div></div>
            <div className="modal_chang" id="msw8"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>사람과 원리와 기법에 대해 배우며,<br/> 배운 것을 기반으로 상용화 된 <br/>VR/AR의 동작 원리를 이해하고 발표한다.<br/>또한 딥러닝 기초이론을 이용한 <br/>UI구현 기초를 배운다. <br/>텐서플로우, 유니티를 사용한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw9"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>스토리지의 주된 매체인 <br/>NVM 기반의 SSD와 HDD <br/>뿐만 아니라 스토리지 시스템 자체를<br/> 구성하는 기술과 구조를 <br/>다룸으로써 스토리지 시스템 <br/>전반에 대해 학습한다. 
                </div>
            </div></div>
            <div className="modal_chang" id="msw10"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>빅데이터를 처리하기 위한 개념,<br/>이론, 기법, 플랫폼 등을 학습한다.<br/> 분산 저장 시스템, 검색을 위한 <br/>NoSQL DB, 처리를 위한 MapReduce <br/>등의 프로그래밍 기법을 살펴보고, <br/>빅데이터 처리를 위한 플랫폼인 <br/>Hadoop, Spark 등을 학습한다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw11"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>가상현실 또는 게임 형식 <br/>컨텐츠에 관련된 이론 및 개발 기법과 <br/>소프트웨어의 활용법을 배운다. <br/> 프로젝트 수행을 통하여 <br/> 직접 컨텐츠를 설계하고 구현한다. <br/>unity와 C#프로그래밍을 학습한다.<br/> 실습과제가 있으며, 프로젝트 발표가 있다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw12"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 과학에서 널리 쓰이는 <br/>알고리즘들에 생명정보 빅데이터를 <br/>적용하는 방법들에 대해 학습한다.<br/> 서열정렬, 패턴 마이닝, 동적 <br/>프로그래밍 등의 알고리즘에 대한<br/>기본 개념들과 머신 러닝에 기반한<br/>최신 생명정보 빅데이터 분석 <br/>방법들을 습득한다.   
                </div>
            </div></div>
            <div className="modal_chang" id="msw13"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>컴퓨터 과학 분야의 논리적 사고와 <br/>효율적인 표현을 위한 방법론을 학습한다.<br/> 학습, 교육, 테스트 및 평가, <br/>생성 및 프레젠테이션 논리를 배운다.<br/> 질의응답과 발표가 있는 수업이다.
                </div>
            </div></div>
            <div className="modal_chang" id="msw14"><div className="modal">
                <div className="modal_bar"> <div className="modal_buttons"><div className="button red"></div><div className="button yellow"></div><div className="button green"></div></div></div>
                <div className="contents">
                    <br/>예제를 통해 사물인터넷을 실제로 <br/>이해하기 위한 이론과 방법론을 다루며, <br/>임베디드 컴퓨팅 장치기술이 포함된다. <br/> 사물인터넷의 시나리오를 통해 <br/>기대되는 결과들을 예측하기도 한다.
                </div>
            </div></div>

            <div className="cs-subject">
                <div className="box box-right box-back1 box-text2" id="cs1">윈도우<br/>프로그래밍</div>
                <div className="box box-right box-back2 box-text2" id="cs2">디지털<br/>논리회로</div>   
                <div className="box box-left box-back1 box-text2" id="cs3">리눅스<br/>시스템</div>
                <div className="box box-right box-back2 box-text2" id="cs4">프로그래밍<br/>언어론</div>
                <div className="box box-left box-back1 box-text2" id="cs5">컴퓨터<br/>구조</div>             
                <div className="box box-right box-back1 box-text2" id="cs6">웹시스템<br/>설계</div>               
                <div className="box box-left box-back1 box-text2" id="cs7">시스템<br/>프로그래밍</div>   
                <div className="box box-right box-back1 box-text2" id="cs8">컴퓨터<br/>네트워크1</div>
                <div className="box box-left box-back1 box-text2" id="cs9">소프트웨어<br/>공학</div>     
                <div className="box box-right box-back1 box-text1" id="cs10">컴파일러</div>
                <div className="box box-left box-back1 box-text2" id="cs11">데이터베이스<br/>프로그래밍</div>
                <div className="box box-right box-back1 box-text2" id="cs12">컴퓨터<br/>네트워크2</div>
                <div className="box box-left box-back1 box-text2" id="cs13">임베디드<br/>시스템</div>
                <div className="box box-center box-back1 box-text1" id="cs14">컴퓨터특강</div>             
                <div className="box box-right box-back1 box-text2" id="cs15">영상 정보<br/>처리</div>
            </div>
    
            <div className="common-subject">
                    <div className="box box-center box-back3 box-text2" id="c1">컴퓨터과학의 <br/> 이해</div>
                    <div className="box box-center box-back1 box-text2" id="c2">프로그래밍<br/>개론</div>
                    <div className="box box-center box-back1 box-text2" id="c3">소프트웨어의<br/>이해</div>
                    <div className="box box-center box-back1 box-text1" id="c4">컴퓨터 수학</div>                   
                    <div className="box box-center box-back2 box-text1" id="c5">자료구조</div>
                    <div className="box box-center box-back2 box-text2" id="c6">데이터<br/>사이언스 개론</div>
                    <div className="box box-center box-back1 box-text2" id="c7">자바<br/>프로그래밍</div>
                    <div className="box box-center box-back1 box-text2" id="c8">컴퓨터<br/>그래픽스</div>               
                    <div className="box box-center box-back2 box-text1" id="c9">운영체제</div>
                    <div className="box box-center box-back2 box-text1" id="c10">알고리즘</div>       
                    <div className="box box-center box-back1 box-text2" id="c11">데이터<br/>베이스와 설계</div>                
                    <div className="box box-center box-back1 box-text2" id="c12">모바일<br/>소프트웨어</div>               
                    <div className="box box-center box-back1 box-text1" id="c13">인공지능</div>                    
                    <div className="box box-center box-back1 box-text2" id="c14">네트워크<br/>보안</div>            
                    <div className="box box-center box-back1 box-text2" id="c15">클라우드<br/>시스템</div>
                    <div className="box box-center box-back1 box-text2" id="c16">시스템 종합<br/>설계</div>         
            </div>

            <div className="sw-subject">
                    <div className="box box-left box-back1 box-text2" id="sw1">소프트웨어<br/>진로 탐색</div>                    
                    <div className="box box-left box-back3 box-text1" id="sw2">통계학 입문</div>                   
                    <div className="box box-left box-back1 box-text2" id="sw3">경영 정보<br/>시스템</div>
                    <div className="box box-right box-back1 box-text2" id="sw4">인터넷 기술<br/>융합</div>               
                    <div className="box box-left box-back2 box-text2" id="sw5">컴퓨터 시스템<br/>기초</div>
                    <div className="box box-left box-back1 box-text2" id="sw6">데이터 마이닝<br/>분석</div> 
                    <div className="box box-right box-back1 box-text2" id="sw7">소프트웨어<br/>분석 및 설계</div>
                    <div className="box box-left box-back1 box-text2" id="sw8">사용자<br/>인터페이스</div>
                    <div className="box box-left box-back1 box-text1" id="sw9">스토리지</div>   
                    <div className="box box-left box-back1 box-text1" id="sw10">빅데이터</div>  
                    <div className="box box-right box-back1 box-text2" id="sw11">인터렉티브<br/>미디어</div>               
                    <div className="box box-left box-back1 box-text2" id="sw12">바이오<br/>인포메틱스 개론</div>       
                    <div className="box box-right box-back1 box-text1" id="sw13">소융특강</div>              
                    <div className="box box-left box-back1 box-text2" id="sw14">사물인터넷<br/>시스템</div>              
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
};

export default Curriculum;