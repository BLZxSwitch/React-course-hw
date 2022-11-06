import './app.css';
import React, { useState } from 'react';
import { Button } from './stories/components/button/Button';

export function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="red">
            {count}
            <Button size="small" primary onClick={() => setCount(count + 1)} label="ADD 1"/>
        </div>
    );
}
