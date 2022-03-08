
import { Alert } from 'react-bootstrap';
import { CongratsProps } from '../types/Guessed.app';
import { CONGRATULATIONS_SUCCESS_MSG } from '../shared/Congrats.constants';
import { DATA_TEST_ELEMENTS } from '../shared/Testing.constants';

const Congrats: React.FC<CongratsProps> = ({ success = false, successMessage = CONGRATULATIONS_SUCCESS_MSG }) => {
    return success ?
        <div data-test={DATA_TEST_ELEMENTS.CONGRATS_COMPONENT}>
            <Alert variant='success' data-test={DATA_TEST_ELEMENTS.CONGRATS_MESSAGE}>
                {successMessage}
            </Alert>
        </div>
    : <div data-test={DATA_TEST_ELEMENTS.CONGRATS_COMPONENT}/>
};

export default Congrats;