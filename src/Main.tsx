import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav';


class Main extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section>
               <TopNav />
                <SideNav />
            </section>
        );
    }
}

export default Main;
