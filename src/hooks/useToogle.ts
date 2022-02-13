import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
    const [isActive, setIsActive] = useState<boolean>(initialState);

    const handleActivation = useCallback(() => setIsActive(true), []);
    const handleDisable = useCallback(() => setIsActive(false), []);
    const toggle = useCallback(() => setIsActive(!isActive), [isActive]);

    return {
        isActive,
        active: handleActivation,
        disable: handleDisable,
        toggle
    }
}

export default useToggle;