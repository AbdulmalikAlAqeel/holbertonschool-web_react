/**
 * MajorCredits interface with a unique brand property.
 */
interface MajorCredits {
  credits: number;
  __majorBrand?: void; // Brand property to enforce nominal typing
}

/**
 * MinorCredits interface with a unique brand property.
 */
interface MinorCredits {
  credits: number;
  __minorBrand?: void; // Brand property to enforce nominal typing
}

/**
 * Function to sum major credits.
 */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  };
}

/**
 * Function to sum minor credits.
 */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  };
}
