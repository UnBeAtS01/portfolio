
import './App.scss';
import Data from './components/data/data';
import About from './components/about/about'
import myself from './assets/myselfsvg.svg';
function App() {
  return (
    <div className="App">
      <div className='intro-div'>
        <div className='myself-img-div'><img className='myself-img' src={myself} alt='picsss' /></div>

        <svg className='intro' width="860" height="292" viewBox="0 0 860 292" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M148.345 7.088V74H139.609V43.664H105.529V74H96.7926V7.088H105.529V36.464H139.609V7.088H148.345Z" stroke="skyblue" stroke-width="2" />
          <path d="M168.733 12.848C167.069 12.848 165.661 12.272 164.509 11.12C163.357 9.968 162.781 8.56 162.781 6.896C162.781 5.232 163.357 3.824 164.509 2.672C165.661 1.52 167.069 0.944 168.733 0.944C170.333 0.944 171.677 1.52 172.765 2.672C173.917 3.824 174.493 5.232 174.493 6.896C174.493 8.56 173.917 9.968 172.765 11.12C171.677 12.272 170.333 12.848 168.733 12.848ZM172.957 21.392V74H164.221V21.392H172.957Z" stroke="skyblue" stroke-width="2" />
          <path d="M197.83 61.904L187.078 87.728H181.222L188.23 61.904H197.83Z" stroke="skyblue" stroke-width="2" />
          <path d="M276.67 7.568V74H267.934V24.464L245.854 74H239.71L217.534 24.368V74H208.798V7.568H218.206L242.782 62.48L267.358 7.568H276.67Z" stroke="skyblue" stroke-width="2" />
          <path d="M339.293 7.088L317.501 48.752V74H308.765V48.752L286.877 7.088H296.573L313.085 40.976L329.597 7.088H339.293Z" stroke="skyblue" stroke-width="2" />
          <path d="M428.629 74H419.893L384.757 20.72V74H376.021V6.992H384.757L419.893 60.176V6.992H428.629V74Z" stroke="skyblue" stroke-width="2" />
          <path d="M484.033 59.12H454.849L449.473 74H440.257L464.449 7.472H474.529L498.625 74H489.409L484.033 59.12ZM481.537 52.016L469.441 18.224L457.345 52.016H481.537Z" stroke="skyblue" stroke-width="2" />
          <path d="M578.001 7.568V74H569.265V24.464L547.185 74H541.041L518.865 24.368V74H510.129V7.568H519.537L544.113 62.48L568.689 7.568H578.001Z" stroke="skyblue" stroke-width="2" />
          <path d="M602.512 14.192V36.56H626.896V43.76H602.512V66.8H629.776V74H593.776V6.992H629.776V14.192H602.512Z" stroke="skyblue" stroke-width="2" />
          <path d="M679.245 7.088V74H670.509V7.088H679.245Z" stroke="skyblue" stroke-width="2" />
          <path d="M716.31 74.672C711.894 74.672 707.926 73.904 704.406 72.368C700.95 70.768 698.23 68.592 696.246 65.84C694.262 63.024 693.238 59.792 693.174 56.144H702.486C702.806 59.28 704.086 61.936 706.326 64.112C708.63 66.224 711.958 67.28 716.31 67.28C720.47 67.28 723.734 66.256 726.102 64.208C728.534 62.096 729.75 59.408 729.75 56.144C729.75 53.584 729.046 51.504 727.638 49.904C726.23 48.304 724.47 47.088 722.358 46.256C720.246 45.424 717.398 44.528 713.814 43.568C709.398 42.416 705.846 41.264 703.158 40.112C700.534 38.96 698.262 37.168 696.342 34.736C694.486 32.24 693.558 28.912 693.558 24.752C693.558 21.104 694.486 17.872 696.342 15.056C698.198 12.24 700.79 10.064 704.118 8.528C707.51 6.992 711.382 6.224 715.734 6.224C722.006 6.224 727.126 7.792 731.094 10.928C735.126 14.064 737.398 18.224 737.91 23.408H728.31C727.99 20.848 726.646 18.608 724.278 16.688C721.91 14.704 718.774 13.712 714.87 13.712C711.222 13.712 708.246 14.672 705.942 16.592C703.638 18.448 702.486 21.072 702.486 24.464C702.486 26.896 703.158 28.88 704.502 30.416C705.91 31.952 707.606 33.136 709.59 33.968C711.638 34.736 714.486 35.632 718.134 36.656C722.55 37.872 726.102 39.088 728.79 40.304C731.478 41.456 733.782 43.28 735.702 45.776C737.622 48.208 738.582 51.536 738.582 55.76C738.582 59.024 737.718 62.096 735.99 64.976C734.262 67.856 731.702 70.192 728.31 71.984C724.918 73.776 720.918 74.672 716.31 74.672Z" stroke="skyblue" stroke-width="2" />
          <path d="M66.1379 267.68H22.3619L14.2979 290H0.473877L36.7619 190.208H51.8819L88.0259 290H74.2019L66.1379 267.68ZM62.3939 257.024L44.2499 206.336L26.1059 257.024H62.3939Z" stroke="skyblue" stroke-width="2" />
          <path d="M184.193 290H171.089L118.385 210.08V290H105.281V189.488H118.385L171.089 269.264V189.488H184.193V290Z" stroke="skyblue" stroke-width="2" />
          <path d="M262.403 290L221.075 244.208V290H207.971V189.632H221.075V236.144L262.547 189.632H279.107L233.603 239.888L279.539 290H262.403Z" stroke="skyblue" stroke-width="2" />
          <path d="M308.718 189.632V290H295.614V189.632H308.718Z" stroke="skyblue" stroke-width="2" />
          <path d="M394.268 189.632V200.288H366.908V290H353.804V200.288H326.3V189.632H394.268Z" stroke="skyblue" stroke-width="2" />
          <path d="M483.493 291.008C476.869 291.008 470.917 289.856 465.637 287.552C460.453 285.152 456.373 281.888 453.397 277.76C450.421 273.536 448.885 268.688 448.789 263.216H462.757C463.237 267.92 465.157 271.904 468.517 275.168C471.973 278.336 476.965 279.92 483.493 279.92C489.733 279.92 494.629 278.384 498.181 275.312C501.829 272.144 503.653 268.112 503.653 263.216C503.653 259.376 502.597 256.256 500.485 253.856C498.373 251.456 495.733 249.632 492.565 248.384C489.397 247.136 485.125 245.792 479.749 244.352C473.125 242.624 467.797 240.896 463.765 239.168C459.829 237.44 456.421 234.752 453.541 231.104C450.757 227.36 449.365 222.368 449.365 216.128C449.365 210.656 450.757 205.808 453.541 201.584C456.325 197.36 460.213 194.096 465.205 191.792C470.293 189.488 476.101 188.336 482.629 188.336C492.037 188.336 499.717 190.688 505.669 195.392C511.717 200.096 515.125 206.336 515.893 214.112H501.493C501.013 210.272 498.997 206.912 495.445 204.032C491.893 201.056 487.189 199.568 481.333 199.568C475.861 199.568 471.397 201.008 467.941 203.888C464.485 206.672 462.757 210.608 462.757 215.696C462.757 219.344 463.765 222.32 465.781 224.624C467.893 226.928 470.437 228.704 473.413 229.952C476.485 231.104 480.757 232.448 486.229 233.984C492.853 235.808 498.181 237.632 502.213 239.456C506.245 241.184 509.701 243.92 512.581 247.664C515.461 251.312 516.901 256.304 516.901 262.64C516.901 267.536 515.605 272.144 513.013 276.464C510.421 280.784 506.581 284.288 501.493 286.976C496.405 289.664 490.405 291.008 483.493 291.008Z" stroke="skyblue" stroke-width="2" />
          <path d="M550.728 189.632V290H537.624V189.632H550.728Z" stroke="skyblue" stroke-width="2" />
          <path d="M653.414 290H640.31L587.606 210.08V290H574.502V189.488H587.606L640.31 269.264V189.488H653.414V290Z" stroke="skyblue" stroke-width="2" />
          <path d="M754.52 189.632V290H741.416V244.496H690.296V290H677.192V189.632H690.296V233.696H741.416V189.632H754.52Z" stroke="skyblue" stroke-width="2" />
          <path d="M837.663 267.68H793.887L785.823 290H771.999L808.287 190.208H823.407L859.551 290H845.727L837.663 267.68ZM833.919 257.024L815.775 206.336L797.631 257.024H833.919Z" stroke="skyblue" stroke-width="2" />
        </svg>

      </div>




      <div className='main'>
        <div className='side-bar'>
          <Data />
        </div>
        <div className='main-bar'>
          <About />
        </div>

      </div>

    </div>
  );
}

export default App;
