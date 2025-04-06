import DoubleCircle from "@/components/DoubleCircle";
import LastFavList from "@/components/profile/LastFavList";
import LastOrders from "@/components/profile/LastOrders";
import PersonalInfo from "@/components/profile/PersonalInfo";

const ProfilePage = () => {
  return (
    <div className="md:col-span-2">
      {/* first row (lastFav, personalInfo)--xl */}
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        <section className="m-5">
          <div className="flex mb-5">
            <DoubleCircle />
            <h1 className="mr-3 text-gray-500">اطلاعات شخصی</h1>
          </div>
          <PersonalInfo />
        </section>
        <section className="m-5">
          <div className="flex mb-5">
            <DoubleCircle />
            <h1 className="mr-3 text-gray-500">لیست آخرین علاقه‌مندی‌ها</h1>
          </div>

          <LastFavList />
        </section>
      </div>
      {/* second row (lastOrders) */}
      <div>
        <section className="m-2">
          <div className="flex mb-5">
            <DoubleCircle />
            <h1 className="mr-3 text-gray-500">آخرین سفارش ها</h1>
          </div>
          <LastOrders />
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
