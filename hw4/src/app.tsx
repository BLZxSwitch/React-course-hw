import './app.css';
import React, { useState } from 'react';
import { Button } from "./stories/components/button/Button";
import { UsersList } from "./stories/components/user-list/Users-list";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div>
                <UsersList/>
            </div>
            <div className="red">
                {count}
                <Button size="small" primary onClick={() => setCount(count + 1)} label="ADD 1"/>
            </div>
        </div>
    );
}
