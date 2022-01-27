
import { CongratsProps } from '../types/Guessed.app';
import { COMPONENT_DATA_TEST_ATT, DEFAULT_SUCCESS_MSG } from '../shared/Congrats.constants';

const Congrats: React.FC<CongratsProps> = ({ success, successMessage = DEFAULT_SUCCESS_MSG }) => {
    return success ?
        <div data-test={COMPONENT_DATA_TEST_ATT}>
            <span data-test='congrats-message'>
                {successMessage}
            </span>
        </div>
    : <div data-test={COMPONENT_DATA_TEST_ATT}/>
};

export default Congrats;