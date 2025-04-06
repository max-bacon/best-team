import Rating from "@mui/material/Rating";
// {
//   name: "";
//   starRatings: [];
//   accessibility: [];
//   inclusive: [];
//   textReviews: [];
// }
export const Form = (company) => {
  return (
    <div>
      <h1>Share your experience with {company}</h1>
      <form>
        <Rating
          name="simple-uncontrolled"
          onChange={(event, newValue) => {
            company.starRatings.push(newValue);
          }}
          defaultValue={0}
        />
        <label for="">Did you feel included at {company.name}?</label>
      </form>
    </div>
  );
};
