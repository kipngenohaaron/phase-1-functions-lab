// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {

    return Math.abs(42 - pickupLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  console.log(distanceFromHqInBlocks(50))
  console.log(distanceFromHqInFeet(50))
  
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock);function distanceTravelledInFeet(startBlock, destinationBlock) {
        const blocks = Math.abs(destinationBlock - startBlock);
        const feetPerBlock = 264;
        return blocks * feetPerBlock;
      }
      
      function calculatesFarePrice(startBlock, destinationBlock) {
        const distance = distanceTravelledInFeet(startBlock, destinationBlock);
        if (distance <= 400) {
          return 0;
        } else if (distance > 400 && distance <= 2000) {
          return (distance - 400) * 0.02;
        } else if (distance > 2000 && distance <= 2500) {
          return 25;
        } else {
          return 'cannot travel that far';
        }
      }
      
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  