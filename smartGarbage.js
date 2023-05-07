const smartGarbage = function(trash, bins) {
  // <<< First attempt, unnecessarily complicated: >>>
  // if (trash === 'waste') {
  //   bins.waste++;
  // } else if (trash === 'recycling') {
  //   bins.recycling++;
  // } else {
  //   bins.compost++;
  // }

  // << Solution: >>>
  bins[trash]++;
  return bins;
};